import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllCountries} from '../redux/actions.js';
import Country from './Country.jsx';
import Paginado from './Paginado.jsx';
import FilterContinent from './FilterContinent.jsx';

export default function Home() {
  const dispatch = useDispatch();
  const {countries} = useSelector(state => state);

  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 9;
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry,indexOfLastCountry);


  const paginado = (pageNum) => {
    setCurrentPage(pageNum)
  }

  useEffect(()=>{
    dispatch(getAllCountries())
  },[dispatch])



  return (
    <div className='Home'>

      <select className='Population'>
        <option>none</option>
        <option>asc</option>
        <option>desc</option>
      </select>
      <select className='Order'>
        <option>none</option>
        <option>asc</option>
        <option>desc</option>
      </select>
      <FilterContinent/>
      
      <div className='Countries'>
      {
        currentCountries?.length > 0 && currentCountries.map(country => {
          return <Country
            id={country.id}
            name={country.name}
            flag={country.flag}
            continent={country.continent}
            key={country.id}
          />
        })
      }
      </div>
        <Paginado
          countriesPerPage={countriesPerPage}
          countries={countries.length}
          paginado={paginado}
        />
    </div>
  )
}
