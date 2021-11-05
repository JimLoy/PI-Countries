import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../styles/landingPage.module.css';
import icon from '../assets/icon.png';

export default function LandingPage () {
  return(
    <div className={styles.landing}>
      <NavLink to='/home'>
        <img className={styles.icon} src={icon} alt='to home'/>
      </NavLink>
    </div>
  )
}
