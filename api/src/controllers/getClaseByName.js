const { Clase } = require("../db");

const getClaseByName = async (name) => {
  const consulta = await Clase.findOne({ where: { nombre: name } });

  return consulta;
};

module.exports = getClaseByName;