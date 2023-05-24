const { Comentario } = require("../db");

const putComentario = async (id, isBanned) => {
  const response = await Comentario.update(
    { isBanned: isBanned },
    { where: { id: id } }
  );

  return `El comentario ${id} ha sido banneado/desbaneado`;
};

module.exports = putComentario;
