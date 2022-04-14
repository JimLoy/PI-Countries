import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getCountryById} from '../redux/actions.js';
import NavBar from './components/NavBar.jsx';
import styles from '../styles/detail.module.css';



export default function Detail({match}) {
  const { id } = match.params;
  const { country } = useSelector(state => state);
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(getCountryById(id))
  },[dispatch,id])


  return (
    <>
      <NavBar/>
      <div className={styles.detail}>
        {

        country?.name ?
        <>
          <img className={styles.flag} src={country.flag} alt=''/>

          <h1 className={styles.name} >{country.name}</h1>

          <div className={styles.data}>
            <p>Id: </p>
            <p>{country.id}</p>

            <p>Capital: </p>
            <p>{country.capital}</p>

            <p>Continent: </p>
            <p>{country.continent}</p>

            <p>Subregion: </p>
            <p>{country.subregion}</p>

            <p>Area: </p>
            <p>{country.area + ' Km²'}</p>

            <p>Population: </p>
            <p>{country.population}</p>

          </div>
          <h2 className={styles.actTitle}>Activities</h2>
          <div className={styles.activities}>
            {
              country.activities.length ?
              country.activities.map(act =>(
                <div className={styles.activity}>
                  <p>Name: </p>
                  <p>{act.name}</p>

                  <p>Difficulty: </p>
                  <p>{act.difficulty}</p>

                  <p>Duration: </p>
                  <p>{act.duration}</p>

                  <p>Season: </p>
                  <p>{act.season}</p>
                </div>
              ))
              :
              <p>Not found</p>
            }
            </div>
        </>
        :
        <h1>Country not found</h1>
        }
      </div>
    </>
  )
}
