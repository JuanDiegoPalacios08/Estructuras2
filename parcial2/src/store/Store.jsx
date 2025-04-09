import { configureStore } from '@reduxjs/toolkit';
import clientsReducer from './slices/clientsSlices';

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
  },
});
