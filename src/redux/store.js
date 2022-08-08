import { configureStore } from '@reduxjs/toolkit';
import weather from './weatherSlice';
import input from './inputSlice';

export const store = configureStore({
  reducer: {
    weather,
    input,
  },
});
