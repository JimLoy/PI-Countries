import React from 'react';
import {useDispatch} from 'react-redux';
import {order,setPage} from '../redux/actions.js';


export default function Order() {
  const dispatch = useDispatch();


  const handleOrder = (e) => {
    e.preventDefault()
    dispatch(order(e.target.value))
    dispatch(setPage(1))
  }


  return (
    <select onChange={handleOrder}>
      <option value='none'>None</option>
      <option value='asc'>A-Z</option>
      <option value='desc'>Z-A</option>
      <option value='max'>Max-Min</option>
      <option value='min'>Min-Max</option>
    </select>
  )
}
