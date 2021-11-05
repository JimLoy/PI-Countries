import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContinent,setPage } from '../redux/actions.js';



export default function FilterContinent() {
  const dispatch = useDispatch();



  const handleFilterContinent = (e) => {
    e.preventDefault()
    dispatch(filterContinent(e.target.value))
    dispatch(setPage(1))
  }


  return (
    <select onChange={handleFilterContinent}>
      <option value='All'>All</option>
      <option value='Americas'>Americas</option>
      <option value='Europe'>Europe</option>
      <option value='Asia'>Asia</option>
      <option value='Africa'>Africa</option>
      <option value='Oceania'>Oceania</option>
      <option value='Antarctic'>Antarctic</option>
    </select>
  )
}
