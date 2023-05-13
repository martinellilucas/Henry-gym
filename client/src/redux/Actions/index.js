import axios from "axios";

export const GET_RUTINAS = "GET_RUTINAS";
export const GET_EJERCICIOS = "GET_EJERCICIOS";
export const GET_EJERCICIOS_ID = "GET_EJERCICIOS_ID";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const GET_NAME_EJERCICIOS = "GET_NAME_EJERCICIOS";


export const getEjercicios = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://henry-gym-production.up.railway.app/ejercicios"
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
      `https://henry-gym-production.up.railway.app/ejercicios/${id}`
    );
    dispatch({ type: GET_EJERCICIOS_ID, payload: response.data });
  };
};

export const getEjerciciosByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios(`https://henry-gym-production.up.railway.app/ejercicios/name?name=${name}`);
      if (response.data.length > 0) {
        return dispatch({
          type: GET_NAME_EJERCICIOS,
          payload: response.data
        });
      } else {
        throw new Error("No se encontró ningún ejercicio con ese nombre.");
      }
    } catch (error) {
      alert(error.message);
    }
  }
}


export const clearDetail = () => ({ type: CLEAR_DETAIL });
