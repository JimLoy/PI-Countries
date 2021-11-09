import axios from 'axios';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_COUNTRY_BY_ID = 'GET_COUNTRY_BY_ID';
export const SET_PAGE = 'SET_PAGE';
export const FILTER_CONTINENT = 'FILTER_CONTINENT';
export const FILTER_NAME_ACTIVITY = 'FILTER_NAME_ACTIVITY';
export const GET_NAMES_ACTIVITY = 'GET_NAMES_ACTIVITY';
export const ORDER = 'ORDER';

export function getAllCountries(name){
  return dispatch => {
    axios.get(`http://localhost:3001/countries?name=${name?name:''}`)
    .then(country => {
      return dispatch({
        type: GET_ALL_COUNTRIES,
        payload: country.data
      })
    })
    .catch(err => console.log(err))
  }
}

export function createActivity(activity){
  return dispatch => {
    axios.post(`http://localhost:3001/activity`, activity)
    .then(() => {
      return dispatch({
        type: CREATE_ACTIVITY
      })
    })
    .catch(err => console.log(err))
  }
}

export function getCountryById(id){
  return dispatch => {
    axios.get(`http://localhost:3001/countries/${id}`)
    .then(country => {
      return dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: country.data
      })
    })
    .catch(err => console.log(err))
  }
}

export function setPage (page){
  return{
    type: SET_PAGE,
    payload: page
  }
}

export function filterContinent(continent){
  return{
    type: FILTER_CONTINENT,
    payload: continent
  }
}

export function filterNameActivity(name){
  return{
    type: FILTER_NAME_ACTIVITY,
    payload: name
  }
}

export function getNamesActivity(){
  return dispatch => {
    axios.get(`http://localhost:3001/activitiesName`)
    .then(names => {
      return dispatch({
        type: GET_NAMES_ACTIVITY,
        payload: names.data
      })
    })
    .catch(err => console.log(err))
  }
}

export function order(order){
  return{
    type: ORDER,
    payload: order
  }
}
