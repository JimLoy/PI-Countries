import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/landingPage.module.css';

export default function LandingPage () {
  return(
    <div className={styles.landing}>
      <Link className={styles.link} to='/home'/>
    </div>
  )
}
