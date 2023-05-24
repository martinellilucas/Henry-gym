const { Clase } = require("../db");

const postClase = async (nombre, dias, horario) => {
  const nuevaClase = await Clase.create({ nombre, dias, horario });

  return nuevaClase;
};

module.exports = postClase;
