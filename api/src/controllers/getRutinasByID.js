const { Rutina } = require("../db");

const getRutinasByID = async (id) => {
  const consulta = await Rutina.findByPk(id);

  return consulta;
};

module.exports = getRutinasByID;
