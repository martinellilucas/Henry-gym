const Comentario = require("../db");
const getComentarios = require("./getComentarios");

const getComentarioByName = async (name) => {
  const coments = await getComentarios();
  const resp = coments.filter((coment) => coment.nombreCliente === name);
  return resp;
};

module.exports = getComentarioByName;
