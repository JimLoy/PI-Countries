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
    history.goBack()
  }

  return (
    <div>
      {

      country?.name ?
      <>
        <img src={country.flag} alt=''/>
        <h1>{country.name}</h1>
        <p>{country.id}</p>
        <p>{country.capital}</p>
        <p>{country.continent}</p>
        <p>{country.subregion}</p>
        <p>{country.area}</p>
        <p>{country.population}</p>
        <ul>
          {
            country.activities.map((activity,i) => <li key={i}>{activity}</li>)
          }
        </ul>

      </>
      :
      <div>Cargando...</div>
      }
      <button onClick={goToBack}> ⬅ </button>
    </div>
  )
}
