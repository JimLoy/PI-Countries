import React from 'react';
import {useDispatch} from 'react-redux';
import {order,setPage} from '../redux/actions.js';
import styles from '../styles/filtersAndOrders.module.css';

export default function Order() {
  const dispatch = useDispatch();


  const handleOrder = (e) => {
    e.preventDefault()
    dispatch(order(e.target.value))
    dispatch(setPage(1))
  }


  return (
    <select className={styles.filtersOrders} defaultValue='none' onChange={handleOrder}>
      <option  value='none'disabled>None</option>
      <option className={styles.opt} value='AZ'>A-Z</option>
      <option className={styles.opt} value='ZA'>Z-A</option>
      <option className={styles.opt} value='max'>Max-Min</option>
      <option className={styles.opt} value='min'>Min-Max</option>
    </select>
  )
}
