import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './taskSlice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer
  }
});