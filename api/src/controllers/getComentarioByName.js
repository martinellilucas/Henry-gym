const getComentarios = require("./getComentarios");

const getComentarioByName = async (name) => {
  const coments = await getComentarios();
  const resp = coments.filter((coment) =>
    coment.nombreCliente.toLowerCase().includes(name.toLowerCase())
  );
  return resp;
};

module.exports = getComentarioByName;
