import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../redux/taskSlice';

import './card.styles.css';

function Card() {
const countries = useSelector((state) => state.countries.countries);
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  //[dispatch] specifies that the effect should only re-run if the value of dispatch changes. This ensures that the effect runs only once when the component mounts and does not run again on subsequent re-renders unless dispatch changes.

  return (
    <div>
      {countries.map((country) => (
        <div key={country.id} className="flag">
          <h2>{country.name}</h2>
          <img src={country.image} alt={country.name} className="" />
        </div>
      ))}
    </div>
  );
}

export default Card;