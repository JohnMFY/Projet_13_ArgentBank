import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async ({ firstName, lastName }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      if (!token) {
        return rejectWithValue({ message: 'No token found' });
      }

      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName })
      });

      const data = await response.json();
      return data.body;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.error = null;
      })
  }
});

export default userSlice.reducer;