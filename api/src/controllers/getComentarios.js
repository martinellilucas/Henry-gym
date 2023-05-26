const { Comentario } = require("../db");
const getClienteByEmail = require("../controllers/getClienteByEmail");
const getClaseByName = require("../controllers/getClaseByName");

const getComentarios = async () => {
  const comentarios = [];

  const consulta = await Comentario.findAll();

  for (const comentario of consulta) {
    const cliente = await getClienteByEmail(comentario.ClienteID);
    const clase = await getClaseByName(comentario.ClaseID);
    comentarios.push({
      id: comentario.id,
      isBanned: comentario.isBanned,
      texto: comentario.texto,
      ClienteID: comentario.ClienteID,
      ClaseID: comentario.ClaseID,
      nombreCliente: cliente.nombre,
      emailCliente: cliente.email,
      nombreClase: clase.nombre,
      picture: cliente.picture,
    });
  }

  return comentarios;
};
module.exports = getComentarios;
