import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllCountries, setPage} from '../redux/actions.js';
import Country from './Country.jsx';

export default function Home() {
  const dispatch = useDispatch();
  const {countries, page} = useSelector(state => state);

  useEffect(()=>{
    dispatch(getAllCountries({}))
  },[dispatch])

  const changePage = page => {
    dispatch(setPage(page));
  }

  return (
    <div className='Home'>
      <div className='Countries'>
      {
        countries?.result?.length > 0 && countries.result.map(country => {
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
      <button disable={page -1 === 0} onClick={() => changePage(page - 1)}>Previous</button>
        <label>{page}</label>
      <button disable={countries?.count <= (page * 9)} onClick={() => changePage(page + 1)}>Next</button>
    </div>
  )
}
