import axios from "axios";

export const GET_RUTINAS = "GET_RUTINAS";

export function getAllRutinas() {
  return async function (dispatch) {
    var response = await axios("http://localhost:3001/rutinas");
    return dispatch({
      type: GET_RUTINAS,
      payload: response.data,
    });
  };
}
