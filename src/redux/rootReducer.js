import {combineReducers} from 'redux'
import {InputReducer } from './input'
import {AppReducer } from './appReducer'
import {SearchReducer} from './searchReducer'

export const rootReducer = combineReducers({
  AuthValidation: InputReducer ,
  app: AppReducer,
  searchHotel: SearchReducer,
}
)