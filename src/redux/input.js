import { USER_AUTHENTICATION} from './type' 

const initialState = {
  password: '', 
  email:'',
  formIsValid: false
}

export const InputReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTHENTICATION:
      return ({...state, ...action.payload})
    default:
      break;
  }
  return state
}