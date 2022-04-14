import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/country.module.css'

export default function Country ({id,name,flag,continent}) {
  return (
    <Link className={styles.country} to={`/home/detail/${id}`}>
      <img className={styles.flag} src={flag} alt=' '/>
      <div className={styles.nameCont}>
        <h1>{name}</h1>
        <h3>{continent}</h3>
      </div>
    </Link>
  )
}
