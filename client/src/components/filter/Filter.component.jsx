import './filter.styles.css';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortAscDesc, sortByContinent }  from '../../redux/slices';
import { getCountries } from '../../redux/asyncActions';
import SearchBar from '../search/Searchbar.component';

function Filter() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);


  function handleOrder(e) {
    e.preventDefault();
    const value = e.target.value;
    setSelected(value);
    dispatch(sortAscDesc(value));
  }

  function handleOrderPopulation(e) {
    e.preventDefault();
    const value = e.target.value;
    dispatch(sortAscDesc(value));
  }
 
  function handleContinents(e) {
    e.preventDefault();
    dispatch(sortByContinent(e.target.value));
  }

  function renderSortingPopulation() {
    if (selected === 'population' || selected === '') {
      return (
        <div className='select-container'>
        <p className='select-text'>Ordenar por</p>
        <select onChange={handleOrderPopulation} className='select-class' disabled={selected == ''}>
          <option value='order'> </option>
          <option value='asc'>Ascendente</option>
          <option value='desc'>Descendente</option>
        </select>
        </div>
      );
    }
  }

    function renderSortingNames() {
    if (selected === 'name') {
      return (
        <div className='select-container'>
        <p className='select-text'>Ordenar por</p>
        <select onChange={handleOrderPopulation} className='select-class' disabled={selected == ''}>
          <option value='order'> </option>
          <option value='alphabeticAsc'>Ascendente</option>
          <option value='alphabeticDesc'>Descendente</option>
        </select>
        </div>
      );
    }
  }

  return  (
    <><div className='filters-container'>
      {/* sorting option */}
      <div className='select-container'>
        <p className='select-text'>Filtrar por</p>
        <select onChange={handleOrder} className='select-class'>
          <option value=''>Ver todo</option>
          <option value='name'>Nombre</option>
          <option value='population'>Población</option>
        </select>
      </div>

      {/* sorting by population or name */}
      {renderSortingPopulation()}
      {renderSortingNames()}

      {/* continent */}
      <div className='select-container'>
        <p className='select-text'>Continentes</p>
        <select onChange={handleContinents} className='select-class'>
          <option value=''>Ver todo</option>
          <option value='Asia'>Asia</option>
          <option value='Africa'>África</option>
          <option value='Europe'>Europa</option>
          <option value='South America'>América del Sur</option>
          <option value='North America'>América del Norte</option>
          <option value='Oceania'>Oceanía</option>
          <option value='Antarctica'>Antártica</option>
        </select>
      </div>
    
      <div className='select-container'>


    <SearchBar />
    </div>
    
    
    </div>
    </>
  );
}

export default Filter;