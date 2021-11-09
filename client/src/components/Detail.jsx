import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {getCountryById} from '../redux/actions.js';



export default function Detail({match}) {
  const { id } = match.params;
  const { country } = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(()=>{
    dispatch(getCountryById(id))
  },[dispatch,id])

  const goToBack = ()=>{
    history.push("/home");
  }

  return (
    <div>
      {

      country?.name ?
      <>
        <img src={country.flag} alt=''/>
        <h1>{country.name}</h1>

        <label>Id: </label>
        <p>{country.id}</p>

        <label>Capital: </label>
        <p>{country.capital}</p>

        <label>Continent: </label>
        <p>{country.continent}</p>

        <label>Subregion: </label>
        <p>{country.subregion}</p>

        <label>Area: </label>
        <p>{country.area + ' Km2'}</p>

        <label>Population: </label>
        <p>{country.population}</p>

        <label>Activities: </label>
        {
          country.activities.length ?
          country.activities.map(act =>(
            <>
              <p>{act.name}</p>
              <p>{act.difficulty}</p>
              <p>{act.duration}</p>
              <p>{act.season}</p>
            </>
          ))
          :
          <p>Activities not found</p>
        }

      </>
      :
      <h1>Country not found</h1>
      }
      <button onClick={goToBack}> Back </button>
    </div>
  )
}
