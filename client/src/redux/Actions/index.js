import axios from "axios";


export const GET_RUTINAS = "GET_RUTINAS";
export const GET_EJERCICIOS = "GET_EJERCICIOS";
export const GET_EJERCICIOS_ID = "GET_EJERCICIOS_ID";
export const CLEAR_DETAIL = "CLEAR_DETAIL";


export function getAllRutinas() {
  return async function (dispatch) {
    var response = await axios("http://localhost:3001/rutinas");
    return dispatch({
      type: GET_RUTINAS,
      payload: response.data,
    });
  };
}

export const getEjercicios = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "henry-gym-production.up.railway.app/ejercicios"
    );
    dispatch({
      type: GET_EJERCICIOS,
      payload: response.data,
    });
  };
};

export const searchById = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `henry-gym-production.up.railway.app/ejercicios/${id}`
    );
    dispatch({ type: GET_EJERCICIOS_ID, payload: response.data });
  };
};

export const clearDetail = () => ({ type: CLEAR_DETAIL });
