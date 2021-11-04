import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_BY_ID,
  SET_NAME,
  SET_PAGE,
  FILTER_CONTINENT,
  FILTER_NAME_ACTIVITY,
  ORDER_POPULATION,
  ORDER
} from './actions.js'


const initialState = {
  countries: [],
  countriesModifed: [],
  country:{},
  name:'',
  page:1,
  nameActivity:'',
  population:'',
  order:''
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

    case SET_NAME:
      return {
        ...state, name: payload
      }

    case SET_PAGE:
      return {
        ...state, page: payload
      }

    case FILTER_CONTINENT:
      if(payload === 'All') return state
      const countriesForContinent = state.countries.filter(country => country.continent === payload)
      return {
        ...state, countriesModifed: countriesForContinent
      }

    case FILTER_NAME_ACTIVITY:
      const countriesForActivity = state.countries.filter(country => country.activity.name === payload);
      return {
        ...state, countriesModifed: countriesForActivity
      }

    case ORDER_POPULATION:
      return {
        ...state, population: payload
      }

    case ORDER:
      return {
        ...state, order: payload
      }

    default:
      return state;
  }
}

export default reducer;
