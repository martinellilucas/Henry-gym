import axios from "axios";
export const GET_RUTINAS = "GET_RUTINAS";
export const GET_EJERCICIOS = "GET_EJERCICIOS";
export const GET_RUTINA_ID = "GET_RUTINA_ID";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const GET_NAME_EJERCICIOS = "GET_NAME_EJERCICIOS";
export const FILTER = "FILTER";
export const GET_USER_BY_EMAIL = "GET_USER_BY_EMAIL";
export const GET_CLIENTES = "GET_CLIENTES";
export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMENTARIOS = "GET_COMENTARIOS";
export const GET_CLASES = "GET_CLASES";
export const GET_CLASES_X_CLIENTE = "GET_CLASES_X_CLIENTE";

export const getClasexCliente = (userId) => {
  return async (dispatch) => {
    const resp = await axios.get(
      `https://henry-gym-production.up.railway.app/clasexcliente/${userId}`
    );
    dispatch({
      type: GET_CLASES_X_CLIENTE,
      payload: resp.data.Clases,
    });
  };
};

export const assignClaseToCliente = (clienteId, claseId) => {
  return async () => {
    await axios.post(
      "https://henry-gym-production.up.railway.app/clasexcliente",
      { clienteId, claseId }
    );
  };
};

export const postComentario = (comentario) => {
  return async function () {
    await axios
      .post(
        "https://henry-gym-production.up.railway.app/comentarios",
        comentario
      )
      .then((res) => {
        return res.data;
      });
  };
};
export const getClases = () => {
  return async (dispatch) => {
    const resp = await axios.get(
      "https://henry-gym-production.up.railway.app/clase"
    );
    dispatch({
      type: GET_CLASES,
      payload: resp.data,
    });
  };
};

export const banUser = (email, body) => {
  return async () => {
    await axios.put(
      `https://henry-gym-production.up.railway.app/cliente/${email}`,
      body
    );
  };
};
export const adminUser = (email, body) => {
  return async () => {
    await axios.put(
      `https://henry-gym-production.up.railway.app/cliente/${email}`,
      body
    );
  };
};

export const banComentario = (id, body) => {
  return async () => {
    await axios.put(
      `https://henry-gym-production.up.railway.app/comentarios/${id}`,
      body
    );
  };
};

export const getComentarios = () => {
  return async (dispatch) => {
    const resp = await axios(
      "https://henry-gym-production.up.railway.app/comentarios"
    );
    dispatch({
      type: GET_COMENTARIOS,
      payload: resp.data,
    });
  };
};

export const getRutinas = () => {
  return async (dispatch) => {
    const resp = await axios.get(
      "https://henry-gym-production.up.railway.app/rutinas"
    );
    dispatch({
      type: GET_RUTINAS,
      payload: resp.data,
    });
  };
};

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

export const rutinaById = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://henry-gym-production.up.railway.app/rutinas/${id}`
    );
    dispatch({ type: GET_RUTINA_ID, payload: response.data });
  };
};

export const getEjerciciosByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios(
        `https://henry-gym-production.up.railway.app/ejercicios/name?name=${name}`
      );
      if (response.data.length > 0) {
        return dispatch({
          type: GET_NAME_EJERCICIOS,
          payload: response.data,
        });
      } else {
        throw new Error("No se encontró ningún ejercicio con ese nombre.");
      }
    } catch (error) {
      alert(error.message);
    }
  };
};

export const postRutina = (rutina) => {
  return async function () {
    await axios
      .post("https://henry-gym-production.up.railway.app/rutinas", rutina, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((res) => {
        return res.data;
      });
  };
};

export const filters = (muscle, difficulty) => {
  return {
    type: FILTER,
    payload: { muscle, difficulty },
  };
};

export const postUser = (user) => {
  return async function () {
    await axios
      .post("https://henry-gym-production.up.railway.app/cliente", user)
      .then((res) => {
        return res.data;
      });
  };
};
export const putUser = (email, body) => {
  return async function () {
    await axios.put(
      `https://henry-gym-production.up.railway.app/cliente/${email}`,
      body
    );
  };
};
export const getUserByEmail = (email) => {
  return async function (dispatch) {
    const response = await axios(
      `https://henry-gym-production.up.railway.app/cliente/${email}`
    );
    dispatch({ type: GET_USER_BY_EMAIL, payload: response.data });
  };
};

export const getClientes = () => {
  return async function (dispatch) {
    const resp = await axios(
      "https://henry-gym-production.up.railway.app/cliente"
    );
    dispatch({ type: GET_CLIENTES, payload: resp.data });
  };
};

export const getComments = () => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://henry-gym-production.up.railway.app/comentarios`
    );
    const data = response.data;
    dispatch({
      type: GET_COMMENTS,
      payload: data,
    });
  };
};

export const clearDetail = () => ({ type: CLEAR_DETAIL });
