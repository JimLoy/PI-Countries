import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContinent } from '../redux/actions.js';



export default function FilterContinent() {
  const dispatch = useDispatch();



  const handleFilterContinent = (e) => {
    dispatch(filterContinent(e.target.value))
  }


  return (
    <select onChange={handleFilterContinent(e)}>
      <option value='All'>All</option>
      <option value=''></option>

    </select>
  )
}
