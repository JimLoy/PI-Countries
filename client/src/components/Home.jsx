import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getAllCountries,getNamesActivity} from '../redux/actions.js';
import Country from './Country.jsx';
import Paged from './Paged.jsx';
import FilterContinent from './FilterContinent.jsx';
import FilterNameActivity from './FilterNameActivity.jsx';
import Order from './Order.jsx';
import Search from './Search.jsx';
import styles from '../styles/home.module.css';

export default function Home() {
  const dispatch = useDispatch();
  const {countriesModifed, page} = useSelector(state => state);

  const countriesPerPage = 9;
  const indexOfLastCountry = page * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = typeof countriesModifed === 'string' ? countriesModifed : countriesModifed.slice(indexOfFirstCountry,indexOfLastCountry);

  useEffect(()=>{
    dispatch(getAllCountries())
    dispatch(getNamesActivity())
  },[dispatch])

  return (
    <div className={styles.home}>
      <Search/>
      <FilterContinent/>
      <FilterNameActivity/>
      <Order/>

      <div className={styles.countries}>
        {
          currentCountries && Array.isArray(currentCountries) ?
            currentCountries.map(country => {
              return <Country
                id={country.id}
                name={country.name}
                flag={country.flag}
                continent={country.continent}
                key={country.id}
              />
            })
          :
          typeof currentCountries === 'string' ? <h1 className={styles.notFound}>{currentCountries}</h1> : ''
        }
      </div>
      {
        currentCountries && Array.isArray(currentCountries) ? <Paged/> : ''
      }
    </div>
  )
}
