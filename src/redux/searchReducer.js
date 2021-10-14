import { SEARCH_HOTEL, LOAD_CITY } from './type' 

const initialState = {
  searchParametrs:{
    city: 'Москва', 
    date: new Date().toISOString().slice(0,10),
    countDay: 1
  },
  hotel_city: []
}

export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_HOTEL:
      return ({...state, searchParametrs: {...state.searchParametrs,...action.payload}})
    case LOAD_CITY:
      return ({...state, hotel_city: action.payload})
    default:
      break;
  }
  return state
}