import { getByName, getCountries, getDetail } from "./asyncActions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  continents: [],
  population: [],
  activities: [],
  activity: [],
  details: [],
  error: "",
  loading: false
};


const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    // based on the given order ('Asc' or 'Desc')
    // based on population in ascending or descending order
    sortAscDesc: (state, action) => {
      let orderCountries;
      if (action.payload === 'asc') {
        orderCountries = state.countries.sort((a, b) => a.population - b.population);
      } else if (action.payload === 'desc') {
        orderCountries = state.countries.sort((a, b) => b.population - a.population);
      } else if (action.payload === 'alphabeticDesc') {
        orderCountries = state.countries.sort((a, b) => b.name.localeCompare(a.name));
      } else if (action.payload === 'alphabeticAsc') {
        orderCountries = state.countries.sort((a, b) => a.name.localeCompare(b.name));
      }    
      state.population = [...orderCountries];
    },
    // based on the selected continent or returns all continents
    sortByContinent: (state, action) => {
      const allContinents = state.continents; 
      const continentFilter = action.payload === '' // console.log(action.payload) => 'Europe', 'Asia', 'All'
        ? allContinents
        : allContinents.filter(i => i.continent === action.payload);
      state.countries = continentFilter;
    },
    // based on the selected activity or returns countries with any activity
    sortByActivity: (state, action) => {
      const allActivities = state.activities;
      const activityFilter = action.payload === ''
        ? allActivities.filter(e => e.activities.length > 0)
        : allActivities.filter(c => c.activities.find((element) => element.name.toLowerCase() === action.payload));
      state.countries = activityFilter;
    },
  },
  // extraReducers: additional actions to be taken based on the results of asynchronous operations
  extraReducers: (builder) => {
    builder
   // addCase: method provided by the builder object to define actions based on different cases or conditions
      .addCase(getCountries.fulfilled, (state, action) => { // when getCountries is fulfilled
        state.error = "";
        state.countries = action.payload;
        state.continents = action.payload;
        state.population = action.payload;
        state.activities = action.payload;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getByName.fulfilled, (state, action) => {
        state.countries = action.payload;
      })
      .addCase(getByName.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getDetail.fulfilled, (state, action) => {
        state.details = action.payload;
      })
  },
});

export const { sortAscDesc, sortByPopulation, sortByContinent, sortByActivity } = countriesSlice.actions;
export default countriesSlice.reducer; 