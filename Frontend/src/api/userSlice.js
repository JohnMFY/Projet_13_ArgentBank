import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      /**** ENVOIE LE RESULTAT DE L'INPUT POUR AVOIR UN TOKEN ****/
      const getToken = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!getToken.ok) {
        const errorData = await getToken.json();
        return rejectWithValue({ message: errorData.message || 'Login failed' });
      }


      const loginData = await getToken.json();
      const token = loginData.body?.token;

      /**** ENVOIE LE TOKEN POUR AVOIR LES DATAS DU PROFIL ****/
      const getUserProfile = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (!getUserProfile.ok) {
        return rejectWithValue({ message: 'Fail to fetch User Profile' });
      }

      const user = await getUserProfile.json();

      return { token, user };
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);
/**** UPDATE LE PRENOM ET NOM DU PROFIL ****/
export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async ({ firstName, lastName }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName }),
      });

      if (!response.ok) {
        return rejectWithValue({ message: 'Fail to update User Profile' });
      }

      const data = await response.json();
      return data.body;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

const initialState = {
  token: null,
  user: null,
  error: null,
  emailError: null,
  passwordError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      state.error = null;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.error = null;
            state.emailError = null;
            state.passwordError = null;
        })
        .addCase(login.rejected, (state, action) => {
          const message = action.payload?.message || action.error.message;
          if (message.toLowerCase().includes('user')) {
            state.emailError = "User not found";
            state.passwordError = null;
          } else if (message.toLowerCase().includes('password')) {
            state.passwordError = "Password incorrect";
            state.emailError = null;
          } else {
            state.emailError = null;
            state.passwordError = null;
          }
        })
        .addCase(updateUserProfile.fulfilled, (state, action) => {
            state.user = { body: action.payload };
            state.error = null;
        })
        .addCase(updateUserProfile.rejected, (state, action) => {
            state.error = action.payload?.message || action.error.message;
        });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;

export const User = (state) => state.auth?.user || null;