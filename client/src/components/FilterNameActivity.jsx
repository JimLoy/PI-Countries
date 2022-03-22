import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterNameActivity, setPage } from '../redux/actions.js';
import styles from '../styles/filtersAndOrders.module.css';


export default function FilterContinent() {
  const dispatch = useDispatch();
  const {namesActivity} = useSelector(state => state);

  const handleFilterNameActivity = (e) => {
    e.preventDefault()
    dispatch(filterNameActivity(e.target.value))
    dispatch(setPage(1))
  }

  return (
    <select className={styles.filtersOrders} onChange={handleFilterNameActivity}>
      <option className={styles.opt} value='All'>All</option>
      {
        namesActivity && namesActivity.map((name,i) => (
          <option key={name + i} value={name}>{name}</option>
        ))
      }
    </select>
  )
}
