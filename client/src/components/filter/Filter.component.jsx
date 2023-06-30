import './filter.styles.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortAscDesc, sortByContinent, sortByPopulation }  from '../../redux/slices';
import { getCountries } from '../../redux/asyncActions';

function Filter() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleOrder(e) {
    e.preventDefault(); // prevents the page from reloading 
    dispatch(sortAscDesc(e.target.value)); // value selected from select
  }

  function handleContinents(e) {
    e.preventDefault();
    dispatch(sortByContinent(e.target.value));
  }

  function handleOrderPopulation(e) {
    e.preventDefault();
    dispatch(sortByPopulation(e.target.value));
  }


  return (
    <>
    {/* sorting option */}
    <select onChange={handleOrder} className='selectclass'>
      <option value=''>Ver todo</option>
      <option value='name'>Name</option>
      <option value='population'>Population</option>
    </select>

    {/* sorting order */}
    <select onChange={handleOrderPopulation} className='selectclass'>
      <option value='asc'>Ascendente</option>
      <option value='desc'>Descendente</option>
    </select>

    {/* continent */}
    <select onChange={handleContinents} className='selectclass'>
      <option value=''>Ver todo</option>
      <option value='Asia'>Asia</option>
      <option value='Africa'>África</option>
      <option value='Europe'>Europa</option>
      <option value='South America'>América del Sur</option>
      <option value='North America'>América del Norte</option>
      <option value='Oceania'>Oceanía</option>
    </select>
  </>
);
}
 

export default Filter;

