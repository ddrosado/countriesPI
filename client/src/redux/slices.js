import { getActivity, getByName, getCountries, getDetail, postActivity } from "./asyncActions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  continents: [],
  population: [],
  activities: [],
  activity: [],
  activityDetail: [],
  details: [],
  error: "",
  loading: false
};


const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    // based on the given order ('Asc' or 'Desc')
    //  or based on population in ascending or descending order
    sortAscDesc: (state, action) => {
      let orderCountries;
      if (action.payload === 'asc') {
        orderCountries = state.countries.sort((a, b) => a.population - b.population);
      } else if (action.payload === 'desc') {
        orderCountries = state.countries.sort((a, b) => b.population - a.population);
      } else if (action.payload === 'alphabeticDesc') {
        orderCountries = state.countries.sort((a, b) => b.name.localeCompare(a.name)); // 1, 0, -1
      } else if (action.payload === 'alphabeticAsc') {
        orderCountries = state.countries.sort((a, b) => a.name.localeCompare(b.name));
      }    
      state.population = [...orderCountries]; // creates a new array by copying all the elements from the array
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
      const selectedActivity = state.activity.filter((activity) => activity.name.toLowerCase() === action.payload.toLowerCase());
      const countries = selectedActivity.flatMap((activity) => activity.Countries); // flatten a nested array structure
      state.countries = countries;
      },
      // update the list of activities
    getActivities: (state, action) => {
      state.activity = action.payload;
    },
  },
  // extraReducers: additional actions to be taken based on the results of asynchronous operations
  extraReducers: (builder) => {
    builder
   // addCase: method provided by the builder object to define actions based on different cases or conditions
      .addCase(getCountries.fulfilled, (state, action) => { 
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
      .addCase(postActivity.fulfilled, (state, action) => {
        const newActivity = action.payload;
        state.activities.push(newActivity);
      })
      .addCase(getActivity.fulfilled, (state, action) => {
        state.activity = action.payload;
      })
  },
});

export const { sortAscDesc, sortByPopulation, sortByContinent, sortByActivity, getActivities } = countriesSlice.actions;
export default countriesSlice.reducer; 



//  else if (action.payload === 'alphabeticDesc') {
//   orderCountries = [...state.countries].sort((a, b) => {
//     if (a.name > b.name) return -1;
//     if (a.name < b.name) return 1;
//     return 0;
//   });
// } else if (action.payload === 'alphabeticAsc') {
//   orderCountries = [...state.countries].sort((a, b) => {
//     if (a.name < b.name) return -1;
//     if (a.name > b.name) return 1;
//     return 0;
//   });
// }