import React from 'react';
import { useDispatch } from 'react-redux';
import { orderPopulation } from '../redux/actions.js';


export default function OrderPopulation() {
  const dispatch = useDispatch();


  const handleOrderPopulation = (e) => {
    e.preventDefault()
    dispatch(orderPopulation(e.target.value))
  }


  return (
    <select onChange={handleOrderPopulation}>
      <option value='none'>None</option>
      <option value='max'>Max-Min</option>
      <option value='min'>Min-Max</option>
    </select>
  )
}
