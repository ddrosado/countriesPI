import './filter.styles.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortAscDesc, sortByActivity, sortByContinent }  from '../../redux/slices';
import { getActivity, getCountries } from '../../redux/asyncActions';



function Filter() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState('');

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivity())
  }, [dispatch]);

  useEffect(() => {
    dispatch(sortByActivity());
  }, [dispatch]);

  const allActivities = useSelector((state) => state.countries.activities);

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

  function handleActivities(e) {
    e.preventDefault();
    dispatch(sortByActivity(e.target.value))
    dispatch(getActivity()); 
  }






// render de orden por población
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

  
// render de orden alfabético
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


  
// render de filtros por continente
function renderContinentFilter(){
  if (selected === 'population' || selected === '' || selected == 'name') {
  return(
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
  )
  }
}



// render de filtro por actividad
function renderActivitiesFilter(){
  if(selected === 'activities'){
    return(
    <div className='select-container'>
    <p className='select-text'>Filtrar por actividad</p>

    <select onChange={handleActivities} className='select-class'>
    <option value=''>Ver todo</option>
  {allActivities.map((option) => (
    <option key={option.name}>{option.name}</option>
  ))}

    
  </select>
    
    </div>
    )

  }
}



  return  (
    <>
   
    
    <div className='filters-container'>



      {/* sorting option */}
      <div className='select-container'>
        <p className='select-text'>Filtrar por</p>
        <select onChange={handleOrder} className='select-class'>
          <option value=''>Ver todo</option>
          <option value='name'>Nombre</option>
          <option value='population'>Población</option>
          <option value='activities'>Actividades</option>
        </select>
      </div>

      {/* sorting by population or name */}
      {renderSortingPopulation()}
      {renderSortingNames()}

      {/* continent */}
      {renderContinentFilter()}

      {/* activities */}
      {renderActivitiesFilter()}
      <div className='select-container'>


    
    </div>
    
    
    </div>
    </>
  );
}

export default Filter;