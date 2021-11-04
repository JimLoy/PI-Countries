import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setPage, filterGeneres} from '../redux/actions.js';



export default function FilterContinent() {
  const dispatch = useDispatch();
  const { genres } = useSelector(state=> state);



  const handleOnChange = (e)=>{
    e.preventDefault()
    dispatch(filterGeneres(e.target.value))
    dispatch(setPage(1))
  }

  return (
    <div>
      <select onChange={handleOnChange}>
        {
          genres?.length && genres.map(gen => {
            return <option value={gen.name} key={gen.id}>{gen.name}</option>
          })
        }
      </select>
    </div>
  )
}
