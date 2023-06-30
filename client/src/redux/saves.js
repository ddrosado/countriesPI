// function Filter() {
//   // sorting options for the dropdown
//   const sortByOptions = ['', 'Nombre', 'Población', 'Continente'];

//   // states to manage the selected option, sorting order, and selected continent
//   const [selectedOption, setSelectedOption] = useState(''); // holds the selected sorting option
//   const [sortOrder, setSortOrder] = useState('asc'); // holds the sorting order (asc or desc)
//   const [selectedContinent, setSelectedContinent] = useState(''); // holds the selected continent

//   const dispatch = useDispatch(); // dispatch function

//   const handleOptionChange = (event) => {
//     const selectedValue = event.target.value; // get the selected value from the dropdown
//     setSelectedOption(selectedValue); // update the selected sorting option
//     setSortOrder('asc'); // reset the sorting order
//     setSelectedContinent('');

//     if (selectedValue === '') {
//       setSelectedContinent('');
//       dispatch(getCountries()); // dispatch action to fetch all countries
//     } else if (selectedValue === 'Continente') {
//       dispatch(sortByContinent(continent)); // dispatch action to sort countries by continent
//     } else if (selectedValue === 'Población') {
//       dispatch(sortByPopulation()); // dispatch action to sort countries by population
//     } else if (selectedValue === 'Nombre') {
//       dispatch(sortByName()); // dispatch action to sort countries by name
//     }
//   };

//   const handleSortOrderChange = (event) => {
//     const selectedValue = event.target.value; // get the selected value from the dropdown
//     setSortOrder(selectedValue); // update the sorting order
//   };



//   const handleContinentChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedContinent(selectedValue);
  
//     if (selectedOption === 'Continente') {
//       dispatch(sortByContinent({ continent: selectedValue }));
//     }
//   };
//   return (
//     <>
//       {/* sorting option */}
//       <select value={selectedOption} onChange={handleOptionChange} className='selectclass'>
//         {sortByOptions.map((option) => (
//           <option key={option} value={option}>{option}</option>
//         ))}
//       </select>

//       {/* sorting order */}
//       <select value={sortOrder} onChange={handleSortOrderChange} disabled={selectedOption !== 'Nombre' && selectedOption !== 'Población'} className='selectclass'>
//         <option value='asc'>Ascendente</option>
//         <option value='desc'>Descendente</option>
//       </select>

//       {/* continent */}
//       <select value={selectedContinent} onChange={handleContinentChange} disabled={selectedOption !== 'Continente'} className='selectclass'>
//         <option value=''>Todos los continentes</option>
//         <option value='Europe'>Europa</option>
//         <option value='South America'>América del Sur</option>
//         <option value='North America'>América del Norte</option>
//         <option value='Oceania'>Oceanía</option>
//         <option value='Asia'>Asia</option>
//         <option value='Africa'>África</option>
//       </select>
//     </>
//   );
// }

// export default Filter;


// --------------------------------------------


// const initialState = {
//   countries: [], // array to hold the country data
//   loading: false, // flag indicating if data is being loaded
//   error: null // holds any error that occurs during data fetching
// };

// // create a slice of the state using createSlice
// const countriesSlice = createSlice({
//   name: 'countries',
//   initialState,
//   reducers: {
//     sortByName: (state) => {
//       state.countries.sort((a, b) => {
//         const nameA = a.name.toLowerCase();
//         const nameB = b.name.toLowerCase();
  
//         if (nameA < nameB) {
//           return -1; 
//         } else if (nameA > nameB) {
//           return 1;
//         }
//         return 0; 
//       });
//     },
//     sortByPopulation: (state, action) => {
//       const selectedContinent = action.payload; // Get the selected continent from the action payload
//       if (selectedContinent === '') {
//         state.filteredCountries = null; // Reset the filtered countries if no continent is selected
//       } else {
//         state.filteredCountries = state.countries.filter(country => country.continent === selectedContinent);
//       }
//     },
//     sortByContinent: (state, action) => {
//       const { continent } = action.payload;
//       const filteredByContinent = state.countries.filter((country) => country.continent === continent);
//       state.countries = filteredByContinent;
//     },
//   },
//   extraReducers: (builder) => {
//     const handleAsyncThunk = (action, stateKey) => {
//       builder
//         .addCase(action.pending, (state) => {
//           state.loading = true;
//         })
//         .addCase(action.fulfilled, (state, action) => {
//           state.loading = false;
//           state[stateKey] = action.payload;
//         })
//         .addCase(action.rejected, (state, action) => {
//           state.loading = false;
//           state.error = action.payload;
//         });
//     };
//     handleAsyncThunk(getCountries, 'countries');
//     handleAsyncThunk(getCountriesByName, 'countries');
//   },
// });

// export const { sortByName, sortByPopulation, sortByContinent } = countriesSlice.actions;
// export default countriesSlice.reducer;