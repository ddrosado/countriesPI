import './home.styles.css'
import Cards from '../../components/cards/Cards.component'
import Navbar from '../../components/navbar/Navbar.component'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/asyncActions';
import Pagination from '../../components/pagination/Pagination.component';


function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.countries.countries);
  
//pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(9);
  
  const pagination = (num) => {
    setCurrentPage(num); // update the currentPage state when a pagination button is clicked
  };
  
  const lastCountryIndex = currentPage * countriesPerPage; // index of the last country to be displayed on the current page
  const firstCountryIndex = lastCountryIndex - countriesPerPage; // index of the first country to be displayed on the current page
  const currentCountries = allCountries.slice(firstCountryIndex, lastCountryIndex); // subset of countries to be displayed on the current page
  
  const nextPage = (page) => {
    setCurrentPage(page + 1); // update the currentPage state when the "Next" button is clicked
  };

  const prevPage = (page) => {
    setCurrentPage(page - 1); 
  };
  
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  
  return (
    <div>
      <Navbar />
      
      <Cards currentCountries={currentCountries} />
      <Pagination
        pagination={pagination}
        allCountries={allCountries.length}
        countriesPerPage={countriesPerPage}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

export default Home;