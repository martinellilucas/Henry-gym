/////ejemplo
import {
  CLEAR_DETAIL,
  GET_EJERCICIOS,
  GET_EJERCICIOS_ID,
  GET_RUTINAS,
} from "../Actions/index";

const initialState = {
  rutinas: [],
  allRutinas: [],
  ejercicios: [],
  filteredEjercicios: [],
  ejercicioDetail: [],
};

export default function footReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RUTINAS:
      return {
        ...state,
        rutinas: action.payload,
        allRutinas: action.payload,
      };
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
    default:
      return state;
  }
}
