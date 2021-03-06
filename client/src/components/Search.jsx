import React from 'react';
import {useDispatch} from 'react-redux';
import {getAllCountries, setPage} from '../redux/actions';
import styles from '../styles/search.module.css';

export default  function Search() {
  const dispatch = useDispatch()

  const handleOnChange = (e)=>{
    e.preventDefault()
    dispatch(getAllCountries(document.getElementById('input').value))
    dispatch(setPage(1))
  }

  return (
    <input
      className={styles.search}
      id='input'
      type='text'
      placeholder='Search country . . .'
      onChange={handleOnChange}
    />
  )
}
