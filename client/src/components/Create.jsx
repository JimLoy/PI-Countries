import {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {createActivity} from "../redux/actions.js";
import styles from '../styles/create.module.css';

export default function  Create() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  let [activity,setActivity] = useState({
    name:'',
    countries:'',
    difficulty:'',
    duration:'',
    season:'Summer',
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
    navigate("/home");
  }

  return (
    <form className={styles.create} onSubmit={handleOnSubmit}>
      <div className={styles.container}>
        <p>Name: </p>
        <input
          className={styles.imp}
          name='name'
          value={activity.name}
          placeholder='Name of the activity...'
          onChange={handleOnChange}
          required
        />

        <p>Countries: </p>
        <input
          className={styles.imp}
          name='countries'
          value={activity.countries}
          placeholder='Argentina,Chile...'
          onChange={handleOnChange}
        />

        <p>Difficulty: </p>
        <input
          className={styles.imp}
          name='difficulty'
          value={activity.difficulty}
          placeholder='Activity difficult  (1 - 5)'
          type= 'number'
          min='1'
          max='5'
          onChange={handleOnChange}
        />

        <p>Duration: </p>
        <input
          className={styles.imp}
          name='duration'
          value={activity.duration}
          placeholder='Days? (Only numbers)'
          type= 'number'
          onChange={handleOnChange}
        />

        <p>Season: </p>
        <select className={styles.selt} onChange={handleOnChange} name='season'>
          <option className={styles.opt} value='Summer' name='Summer'>Summer</option>
          <option className={styles.opt} value='Autumn' name='Autumn'>Autumn</option>
          <option className={styles.opt} value='Winter' name='Winter'>Winter</option>
          <option className={styles.opt} value='Spring' name='Spring'>Spring</option>
        </select>

      </div>
      <input className={styles.btn} type='submit' value='Save' />
    </form>
  )
}
