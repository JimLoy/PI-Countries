import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getAllCountries} from '../redux/actions.js';
import Country from './Country.jsx';
import Paginado from './Paginado.jsx';
import FilterContinent from './FilterContinent.jsx';
import Order from './Order.jsx';
import Search from './Search.jsx';

export default function Home() {
  const dispatch = useDispatch();
  const {countriesModifed, page} = useSelector(state => state);

  const countriesPerPage = 9;
  const indexOfLastCountry = page * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countriesModifed.slice(indexOfFirstCountry,indexOfLastCountry);

  useEffect(()=>{
    dispatch(getAllCountries())
  },[dispatch])

  return (
    <div className='Home'>
      <Search/>
      <FilterContinent/>
      <Order/>


      <div className='Countries'>
      {
        currentCountries && Array.isArray(currentCountries) ? currentCountries.map((country,i) => {
          return <Country
            id={country.id}
            name={country.name}
            flag={country.flag}
            continent={country.continent}
            key={i}
          />
        })
        :
        <Country
          id={currentCountries.id}
          name={currentCountries.name}
          flag={currentCountries.flag}
          continent={currentCountries.continent}
          key={currentCountries.id}
        />
      }
      </div>
        <Paginado/>
    </div>
  )
}
