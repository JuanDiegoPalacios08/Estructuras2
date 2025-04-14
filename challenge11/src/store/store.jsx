// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Aquí podrías incluir más slices si los requieres
  }
});
