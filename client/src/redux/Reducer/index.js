
/////ejemplo 
import {
  GET_RUTINAS
} from "../Actions/index"

const initialState = {
  rutinas: [],
  allRutinas: []
}

export default function footReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RUTINAS: 
     return {
      ...state,
      rutinas: action.payload,
      allRutinas: action.payload
     } 

     default: 
      return state;
  }
}