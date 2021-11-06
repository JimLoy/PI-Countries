import {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {createActivity} from "../redux/actions.js";

export default function  Create() {
  const dispatch = useDispatch()
  const history = useHistory();
  const {countries} = useSelector(state=> state)
  let [activity,setActivity] = useState({
    name:'',
    countries:'',
    difficulty:0,
    duration:'',
    season:'',
  });

  const handleOnChange = (e) => {
    setActivity(prevCountry => {
      const newCountry = {
        ...prevCountry,
        [e.target.name]: e.target.value,
      };
      return newCountry
    });
  }


  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(createActivity(activity));
    alert("Activity created");
    setActivity({ name: '', countries:[],difficulty:0, duration:0, season:''});
    history.push("/home");
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Name: </label>
          <input
            name='name'
            value={activity.name}
            placeholder='Name of the activity...'
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <label>Countries: </label>
          <input
            name='countries'
            value={activity.countries}
            placeholder='Argentina,Chile...'
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Difficulty: </label>
          <input
            name='difficulty'
            value={activity.difficulty}
            placeholder='Activity difficult  (1 - 5)...'
            type= 'number'
            min='1'
            max='5'
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Duration: </label>
          <input
            name='duration'
            value={activity.duration}
            placeholder='For how many days?'
            type= 'number'
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Season: </label>
          <select onChange={handleOnChange} name='season'>
            <option value='' disabled=''>...</option>
            <option value='Summer' name='Summer'>Summer</option>
            <option value='Autumn' name='Autumn'>Autumn</option>
            <option value='Winter' name='Winter'>Winter</option>
            <option value='Spring' name='Spring'>Spring</option>
          </select>
        </div>
        <input type='submit' value='Save' />
        <input type='reset' value='Reset' />
      </form>
    </div>
  )
}
