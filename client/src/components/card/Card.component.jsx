import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getActivity, getCountries } from '../../redux/asyncActions';

import './card.styles.css';


function Card() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);

  return (
    <div>
      <div className='card-container'>

      </div>
    </div>
  );
}

export default Card;