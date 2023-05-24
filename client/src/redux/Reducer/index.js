/////ejemplo
import {
  CLEAR_DETAIL,
  GET_EJERCICIOS,
  GET_RUTINA_ID,
  GET_NAME_EJERCICIOS,
  GET_RUTINAS,
  FILTER,
  GET_USER_MEMBERSHIP,
  GET_EJERCICIOS_ID,
} from "../Actions/index";

const initialState = {
  ejercicios: [],
  filteredEjercicios: [],
  ejercicioId: [],
  rutinaDetail: [],
  rutinas: [],
  dificultad: [],
  membership: "",
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
        ejercicioId: action.payload
      }
    case GET_RUTINA_ID:
      return {
        ...state,
        rutinaDetail: action.payload,
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
        filteredEjercicios: action.payload,
      };
    case GET_RUTINAS:
      return {
        ...state,
        rutinas: action.payload,
      };

    case FILTER:
      const { muscle, difficulty } = action.payload;
      const multipleFilter = state.ejercicios.filter(
        (ejercicio) =>
          ejercicio.muscle.includes(muscle) &&
          ejercicio.difficulty.includes(difficulty)
      );
      return { ...state, filteredEjercicios: multipleFilter };
    case GET_USER_MEMBERSHIP:
      return { ...state, membership: action.payload };
    default:
      return { ...state };
  }
}
