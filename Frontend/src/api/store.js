import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../api/userSlice'

const store = configureStore({
  reducer: {
    auth: userSlice
  }
});

export default store;