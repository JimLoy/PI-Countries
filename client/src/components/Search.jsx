import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {getAllCountries} from '../redux/actions';



export default  function Search() {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')


  const handleOnChange = (e)=>{
    e.preventDefault()
    setInput(e.target.value)
  }

  const onSubmit = (e)=>{
    e.preventDefault()
    dispatch(getAllCountries(input))
    setInput('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Search country...' onChange={handleOnChange} value={input} />
      <button type='submit' >🔍</button>
    </form>
  )
}
