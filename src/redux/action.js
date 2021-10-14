import {USER_AUTHENTICATION, SHOW_ALERT, SEARCH_HOTEL, LOAD_CITY, ADD_BOOKMARK, DELETE_BOOKMARK, SORTING} from './type' 

export function authenticationValid(credentinal){
  return {
    type: USER_AUTHENTICATION,
    payload: credentinal,
  }
}

export function showAlert(message, target){
  console.log({[target]: message});
  return {
    type: SHOW_ALERT,
    payload: {[target]: message}
  }
}

export function searchHotel(message){
  return {
    type: SEARCH_HOTEL,
    payload: message,
  }
}

export function loadCity(city, checkIN, days){
  let checkOut = new Date(checkIN)
  checkOut.setDate(checkOut.getDate() + days);
  checkOut = checkOut.toISOString().slice(0,10)
  return async dispatch => {
    const response = await fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${checkIN}&checkOut=${checkOut}&limit=100`)
    const json = await response.json()
    dispatch({type: LOAD_CITY, payload: json})
  }
}

export function addBookmark(bookmark){
  return {
    type: ADD_BOOKMARK,
    payload: bookmark,
  }
}
export function deleteBookmark(bookmark){
  return {
    type: DELETE_BOOKMARK,
    payload: bookmark,
  }
}

export function sortingHotel(item){
  return {
    type: SORTING,
    payload: item
  }

}
