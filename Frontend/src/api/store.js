import { configureStore } from '@reduxjs/toolkit'
import SignInFormSlice from '../features/auth/SignInFormSlice';
const store = configureStore({
  reducer: {
    auth: SignInFormSlice
  }
})

export default store;