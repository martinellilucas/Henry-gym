/////ejemplo
import {
  CLEAR_DETAIL,
  GET_EJERCICIOS,
  GET_EJERCICIOS_ID,
  GET_NAME_EJERCICIOS
} from "../Actions/index";

const initialState = {

  ejercicios: [],
  filteredEjercicios: [],
  ejercicioDetail: [],
};

export default function footReducer(state = initialState, action) {
  switch (action.type) {
    
    case GET_EJERCICIOS:
      return {
        ...state,
        ejercicios: action.payload,
        filteredEjercicios: action.payload,
      };
    case GET_EJERCICIOS_ID:
      return {
        ...state,
        ejercicioDetail: action.payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        ejercicioDetail: [],
      };

      case GET_NAME_EJERCICIOS:
        return {
          ...state,
          ejercicios: action.payload,
        }

    default:
      return state;

  }
 
}
