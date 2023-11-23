/////ejemplo
import {
  CLEAR_DETAIL,
  GET_EJERCICIOS,
  GET_RUTINA_ID,
  GET_NAME_EJERCICIOS,
  GET_RUTINAS,
  FILTER,
  GET_USER_BY_EMAIL,
  GET_CLIENTES,
  GET_CLASES,
  GET_COMENTARIOS,
  GET_CLASES_X_CLIENTE,
  SEARCH_USER_BY_EMAIL,
  SEARCH_CLASE_BY_NAME,
  SEARCH_COMENTARIOS_BY_NAME,
  DELETE_CLASE_X_CLIENTE,
} from "../Actions/index";

const initialState = {
  ejercicios: [],
  filteredEjercicios: [],
  rutinaDetail: [],
  rutinas: [],
  dificultad: [],
  membership: "",
  user: {},
  clientes: [],
  allClients: [],
  comentarios: [],
  allComments: [],
  clases: [],
  allClases: [],
  clasesxCliente: [],
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

    case GET_USER_BY_EMAIL:
      return { ...state, user: { ...action.payload } };

    case GET_CLIENTES:
      return {
        ...state,
        clientes: [...action.payload],
        allClients: [...action.payload],
      };

    case GET_CLASES:
      return { ...state, clases: action.payload };

    case GET_COMENTARIOS:
      return { ...state, comentarios: [...action.payload] };

    case GET_CLASES_X_CLIENTE:
      return { ...state, clasesxCliente: action.payload };
    case SEARCH_USER_BY_EMAIL:
      return {
        ...state,
        allClients: [...state.clientes],
        clientes: state.allClients.filter(
          (cliente) => cliente.email === action.payload.email
        ),
      };
    case SEARCH_CLASE_BY_NAME:
      return {
        ...state,
        allClases: [...state.clases],
        clases: [...action.payload],
      };
    case SEARCH_COMENTARIOS_BY_NAME:
      return {
        ...state,
        allComments: [...state.comentarios],
        comentarios: [...action.payload],
      };
    case DELETE_CLASE_X_CLIENTE:
      const updatedClasesxCliente = state.clasesxCliente.filter(
        (clase) => clase.id !== action.payload
      );
      return { ...state, clasesxCliente: updatedClasesxCliente };

    default:
      return { ...state };
  }
}
