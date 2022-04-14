import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContinent,setPage } from '../redux/actions.js';
import styles from '../styles/filtersAndOrders.module.css';



export default function FilterContinent() {
  const dispatch = useDispatch();

  const handleFilterContinent = (e) => {
    e.preventDefault()
    dispatch(filterContinent(e.target.value))
    dispatch(setPage(1))
  }

  return (
    <select className={styles.filtersOrders} onChange={handleFilterContinent}>
      <option className={styles.opt} value='All'>All</option>
      <option className={styles.opt} value='Americas'>Americas</option>
      <option className={styles.opt} value='Europe'>Europe</option>
      <option className={styles.opt} value='Asia'>Asia</option>
      <option className={styles.opt} value='Africa'>Africa</option>
      <option className={styles.opt} value='Oceania'>Oceania</option>
      <option className={styles.opt} value='Antarctic'>Antarctic</option>
    </select>
  )
}
