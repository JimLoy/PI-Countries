import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/country.module.css'

export default function Country ({id,name,flag,continent}) {
  return (
    <Link className={styles.country} to={`/home/detail/${id}`}>
      <img src={flag} alt=' '/>
      <h1>{name}</h1>
      <h3>{continent}</h3>
    </Link>
  )
}
