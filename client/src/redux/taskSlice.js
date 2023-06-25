import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countries: [],
  loading: false,
  error: null
};

const url = 'http://localhost:3001';

export const getCountries = createAsyncThunk('countries/getCountries', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${url}/countries`);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data.msg);
  }
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default countriesSlice.reducer;