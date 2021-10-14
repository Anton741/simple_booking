import _  from "lodash";
import { SHOW_ALERT, ADD_BOOKMARK, DELETE_BOOKMARK, SORTING} from './type' 

const initialState = {
  alert: {
    password: [],
    email:[]
  },
  bookmark: [],
  currentSort:{
    mode:"asc",
    item: 'Рейтинг',
  }
}

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      console.log('ACTION',action.payload);
      return ({...state , alert: {...state.alert, ...action.payload}})
    case ADD_BOOKMARK:
      return ({...state, bookmark: state.bookmark.concat([action.payload])})
    case DELETE_BOOKMARK:
      return ({...state, bookmark: state.bookmark.filter(element => {
        return element.bookmark === true;
        // return element.hotelId !== action.payload.hotelId
      })})
    case SORTING:
      const field = {
        "Рейтинг": "stars",
        "Цена": "priceAvg",
      }
      state.currentSort.mode === 'asc' ? state.currentSort.mode = 'desc' : state.currentSort.mode = 'asc' 
      console.log(_.orderBy(state.bookmark, action.payload, state.currentSort));
      state.currentSort.item = action.payload
      return ({...state , bookmark: _.orderBy(state.bookmark, field[action.payload], state.currentSort.mode)})
    default:
      break;
  }
  return state
}