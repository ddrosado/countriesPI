import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './slices';
import { getCountries } from './asyncActions';

export const store = configureStore({
  reducer: {
    countries: countriesReducer
  }
});

store.dispatch(getCountries());

