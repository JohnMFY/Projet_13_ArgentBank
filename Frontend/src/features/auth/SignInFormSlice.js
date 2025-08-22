import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const TOKEN= 'key';

/**** SAUVEGARDE LE TOKEN DANS LE LOCAL STORAGE ****/
  const saveTokenInLocalStorage = (token) => { 
    localStorage.setItem(TOKEN, token);
  };

/**** RECUPERE LE TOKEN DU LOCAL STORAGE ****/
  const getTokenInLocalStorage= () => {
    try {
      return localStorage.getItem(TOKEN);
    } catch(error) {
      console.error(error);
      return null;
    }
  };

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {

      /**** ENVOIE LE RESULTAT DE L'INPUT POUR AVOIR UN TOKEN ****/
        const getToken = await fetch('http://localhost:3001/api/v1/user/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });

        if (!getToken.ok) {;
          return rejectWithValue({ message:'Login failed'});
        }

        const loginData = await getToken.json();
        const token = loginData.body?.token;

      /**** ENVOIE LE TOKEN POUR AVOIR LES DATAS DU PROFIL ****/
        const getUserProfile = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({})
        });

        if (!getUserProfile.ok){
          return rejectWithValue({ message:'Fail to fetch User Profile'});
        }
  
      /**** saveTokenInLocalStorage() ****/
        const user = await getUserProfile.json();
        saveTokenInLocalStorage(token);
        return { token, user };
      } catch (error) {
        return rejectWithValue({message: error.message});
    }
  }
);

const initialState = {
  token: getTokenInLocalStorage(),
  user: null,
  status: 'idle',
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      state.status = 'idle';
      state.error = null;
      try {
        localStorage.removeItem(TOKEN);
      } catch(error) {
          console.error(error);
        }
    },
    setUser(state, action) {
      state.user = action.payload;
    } 
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || action.error.message;
      });
  }
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
export const User = (state) => state.auth.user;