import React from 'react';
import {useDispatch} from 'react-redux';
import {getAllCountries} from '../redux/actions';



export default  function Search() {
  const dispatch = useDispatch()

  const handleOnChange = (e)=>{
    e.preventDefault()
    dispatch(getAllCountries(document.getElementById('input').value))
  }

  return (
    <input id='input' type='text' placeholder='Search country...' onChange={handleOnChange}/>
  )
}
