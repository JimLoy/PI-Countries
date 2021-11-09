import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  SET_PAGE,
  FILTER_CONTINENT,
  FILTER_NAME_ACTIVITY,
  GET_NAMES_ACTIVITY,
  ORDER
} from './actions.js'


const initialState = {
  countries: [],
  countriesModifed: [],
  country:{},
  namesActivity:[],
  page:1,
}

function reducer (state = initialState, { type, payload }){
  switch (type) {

    case GET_ALL_COUNTRIES:
      return {
        ...state, countries: payload, countriesModifed: payload
      }

    case GET_COUNTRY_BY_ID:
      return {
        ...state, country: payload
      }

    case SET_PAGE:
      return {
        ...state, page: payload
      }

    case FILTER_CONTINENT:
      if(payload === 'All') return {...state, countriesModifed: state.countries}
      const countriesByContinent = state.countries.filter(country => country.continent === payload)
      return {
        ...state, countriesModifed: countriesByContinent
      }

    case FILTER_NAME_ACTIVITY:
      if(payload === 'All') return {...state, countriesModifed: state.countries}
      const activitiesByName = state.countries.filter(country => country.activities.length ? (country.activities.map(act => act.name === payload ? true : false).includes(true)) : false)
      return {
        ...state, countriesModifed: activitiesByName
      }

    case GET_NAMES_ACTIVITY:
      const names = payload.map(nam => nam.name);
      return {
        ...state, namesActivity: names
      }

    case ORDER:
      let resultOrder = state.countriesModifed;
      if(payload === 'asc'){
        resultOrder = resultOrder.sort((a,b) =>{
          return a.name.localeCompare(b.name)
        })
      }else if(payload === 'desc'){
        resultOrder = resultOrder.sort((a,b) =>{
          return b.name.localeCompare(a.name)
        })
      }else if(payload === 'min'){
        resultOrder = resultOrder.sort((a, b) => a.population - b.population)
      }else {
        resultOrder = resultOrder.sort((a, b) => b.population - a.population)
      }
      return { ...state, countriesModifed: resultOrder }

    default:
      return state;
  }
}

export default reducer;
