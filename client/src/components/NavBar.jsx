import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/navBar.module.css';

export default function NavBar () {
  return (
    <nav className={styles.navBar}>
      <Link className={styles.link} to={'/home'}>Home</Link>
      <Link className={styles.link} to={'/home/create'}>Create your own activities</Link>
    </nav>
  )
}
