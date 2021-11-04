import { useDispatch } from 'react-redux';
import { filterContinent } from '../redux/actions.js';



export default function FilterContinent() {
  const dispatch = useDispatch();



  const handleFilterContinent = (e) => {
    dispatch(filterContinent(e.target.value))
  }


  return (
    <select onChange={handleFilterContinent(e)}>
      <option value='All'>All</option>
      <option value='Americas'>Americas</option>
      <option value='Europe'>Europe</option>
      <option value='Asia'>Asia</option>
      <option value='Africa'>Africa</option>
      <option value='Oceania'>Oceania</option>
      <option value='Antartic'>Antartic</option>
    </select>
  )
}
