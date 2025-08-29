import { configureStore } from '@reduxjs/toolkit'
import SignInFormSlice from '../features/auth/SignInFormSlice';
import UserHeaderSlice from '../features/user/UserHeaderSlice';

const store = configureStore({
  reducer: {
    auth: SignInFormSlice,
    user: UserHeaderSlice
  }
})

export default store;