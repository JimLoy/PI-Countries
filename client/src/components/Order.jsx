import React from 'react';
import { useDispatch } from 'react-redux';
import { order } from '../redux/actions.js';


export default function Order() {
  const dispatch = useDispatch();


  const handleOrder = (e) => {
    e.preventDefault()
    dispatch(order(e.target.value))
  }


  return (
    <select onChange={handleOrder}>
      <option value='none'>None</option>
      <option value='asc'>A-Z</option>
      <option value='desc'>Z-A</option>
    </select>
  )
}
