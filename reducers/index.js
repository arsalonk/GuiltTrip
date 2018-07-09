import { DISPLAY_MESSAGE, INPUT_NUMBER } from '../actions'

const initialState = {
  number: '',
  message: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case INPUT_NUMBER:
      return {
        ...state,
        number: action.num
      }
    
    case DISPLAY_MESSAGE:
      return {
        ...state,
        message: action.boolean
      }

    case DISPLAY_MESSAGE:

    default:
      return state;
  }
}