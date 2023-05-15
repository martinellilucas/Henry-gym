/////ejemplo
import {
  CLEAR_DETAIL,
  GET_EJERCICIOS,
  GET_RUTINA_ID,
  GET_NAME_EJERCICIOS,
  GET_RUTINAS,
  FILTER_BY_MUSCULO,
  FILTER_BY_DIFICULTAD,
} from "../Actions/index";

const initialState = {
  ejercicios: [],
  filteredEjercicios: [],
  rutinaDetail: [],
  rutinas: [],
  dificultad: [],
};

export default function footReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EJERCICIOS:
      return {
        ...state,
        ejercicios: action.payload,
        filteredEjercicios: action.payload,
      };
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
        ejercicios: [...state.filteredEjercicios],
        filteredEjercicios: action.payload,
      };
    case GET_RUTINAS:
      return {
        ...state,
        rutinas: action.payload,
      };

    case FILTER_BY_MUSCULO:
      return {
        ...state,
        ejercicios: state.filteredEjercicios.filter((ejercicio) =>
          ejercicio.muscle.includes(action.payload)
        ),
      };
    case FILTER_BY_DIFICULTAD:
      return {
        ...state,
        ejercicios: state.filteredEjercicios.filter((ejercicio) =>
          ejercicio.difficulty.includes(action.payload)
        ),
      };

    default:
      return { ...state };
  }
}
