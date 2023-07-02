import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../redux/asyncActions';
import Filter from '../filter/Filter.component';
import './card.styles.css';


function Card() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <Filter />
      <div className='card-container'>
        {/* {countries.map((country) => (
          <div key={country.id} className='card'>
            <img src={country.image} alt={country.name} className='flag' />
            <h1>{country.name}</h1>
            <h2>{country.continent}</h2>
            <button className='card-button'>Ver detalle</button>
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Card;