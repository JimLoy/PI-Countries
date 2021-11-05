/*import {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {createVideogame} from "../redux/actions.js";



export default function  Create() {
  const dispatch = useDispatch()
  const history = useHistory();
  const { genres } = useSelector(state=> state)
  const [game,setGame] = useState({
    name:'',
    genresState:[],
    image:'',
    description:'',
    released:'',
    rating:'',
    platforms:'',
  });



  function handleOnChange(e){
    setGame(prevGame => {
      const newGame = {
        ...prevGame,
        [e.target.name]: e.target.value,
      };
      return newGame
    });
  }



  function handleGenres(e) {
    if (!game.genresState.includes(e.target.value)){
      setGame({
        ...game,
        [e.target.name]: [e.target.name].concat(e.target.value)
      });
    }
  };



  function handleOnSubmit(e){
    e.preventDefault();
    dispatch(createVideogame(game));
    alert("Game created");
    setGame({ name: '', genres:[],image:'', description: '', released: '', rating:'', platforms:''});
    history.push("/home");
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Name: </label>
          <input
            name='name'
            value={game.name}
            placeholder='Name of the game...'
            onChange={handleOnChange}
            required
          />
        </div>


        <div>
          <label>Genres: </label>
            {genres.map((gen, index) => {
              return <div>
                  <label key={'l' + index} >{gen.name}</label>
                  <input
                    name='genresState'
                    value={gen.name}
                    type='checkbox'
                    onChange={handleGenres}
                    key={'g' + index}
                  />
                </div>
            })}
        </div>


        <div>
          <label>Image: </label>
          <input
            name='image'
            type= 'url'
            value={game.image}
            placeholder='Add an image URL for your game...'
            onChange={handleOnChange}
          />
        </div>


        <div>
          <label>Released: </label>
          <input
            name='released'
            value={game.released}
            type= 'date'
            onChange={handleOnChange}
          />
        </div>


        <div>
          <label>Rating: </label>
          <input
            name='rating'
            placeholder='Rate your game (1 - 5)...'
            value={game.rating}
            type= 'number'
            min='0'
            max='5'
            onChange={handleOnChange}
          />
        </div>


        <div>
          <label>Platforms: </label>
          <input
            name='platforms'
            placeholder='PC, Xbox...'
            value={game.platforms}
            onChange={handleOnChange}
            required
          />
        </div>


        <div>
          <label>Description: </label>
          <textarea
            className='textarea'
            placeholder='Description of the game...'
            name='description'
            onChange={handleOnChange}
            value={game.description}
            required
          />
        </div>

        <input type="submit" value="Save" />

      </form>
    </div>
  )
}












/*
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getEpisodes,createCharacter } from '../Redux/actions/index.js'


function Form() {
    const dispatch = useDispatch()
    const {episodes} = useSelector(state => state)
    const [formulario,setFormulario] = React.useState({
        name:"",
        status:"",
        gender:"",
        image:"",
        location:"",
        episode:0
    })
    useEffect(()=>{
        dispatch(getEpisodes())
    },[dispatch])

    const onSubmit = (e)=>{
        e.preventDefault()
        dispatch(createCharacter(formulario))
        setFormulario({
            name:"",
            status:"",
            gender:"",
            image:"",
            location:"",
            episode:0
        })
    }

    const handleOnChange = (e)=>{
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }
    const handleOnChangeEspecial = (e)=>{
        if(formulario.episode.includes(e.target.value)){
           let newEpisdoes = formulario.episode.filter(ep => ep !== e.target.value)
            setFormulario({
                ...formulario,
               episode: newEpisdoes
            })
        }else{
            setFormulario({
                ...formulario,
                episode: [...formulario.episode, e.target.value]
            })
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <label >Name</label>
            <input value={formulario.name} onChange={handleOnChange} name="name" type="text" />
            <label >Status</label>
            <input value={formulario.status} onChange={handleOnChange} name="status" type="text" />
            <label >Genre</label>
            <input value={formulario.gender} onChange={handleOnChange} name="gender" type="text" />
            <label >Location</label>
            <input value={formulario.location} onChange={handleOnChange} name="location" type="text" />
            <label >image</label>
            <input value={formulario.image} onChange={handleOnChange} name="image" type="text" />
            <select onChange={handleOnChange} name="episode"  >
            {
                episodes.length > 0 &&
                episodes.map(e =>(
                    <option key={e.id} value={e.id}>{e.name}</option>
                ))
            }
            </select>

            <input type="submit" value="Create"/>
            {/* {
                formulario?.episode.length > 0 &&
                formulario.episode.map(e =>(
                    <label>{e}</label>
                ))
            } *//*}
        </form>
    )
}

export default Form
*/
