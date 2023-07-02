import './home.styles.css'
import Cards from '../../components/cards/cards.component'
import Navbar from '../../components/navbar/Navbar.component'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/asyncActions';
import Pagination from '../../components/pagination/Pagination.component';


function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector(state => state.countries.countries);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(9);
  
  const pagination = (num) => {
    setCurrentPage(num);
  };
  
  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountries = allCountries.slice(firstCountryIndex, lastCountryIndex);
  
  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  
  return (
    <div>
      <Navbar />
      <div className='home-container'></div>
      <Cards currentCountries={currentCountries} />
      <Pagination
        pagination={pagination}
        allCountries={allCountries.length}
        countriesPerPage={countriesPerPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default Home;