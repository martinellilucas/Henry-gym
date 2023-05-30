const { Clase } = require("../db");

const deleteClase = async (id) => {
  const clase = await Clase.destroy({ where: { id: id }, force: true });

  return clase;
};
module.exports = deleteClase;
