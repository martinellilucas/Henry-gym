const clases = require("../../Clases.js");
const { Clase } = require("../db");
const getClase = async () => {
  const consult = await Clase.findAll();
  if (!consult.length) {
    for (const clase of clases) {
      await Clase.create({
        nombre: clase.nombre,
        dias: [...clase.dias],
        horario: clase.horario,
      });
    }
  }
  return await Clase.findAll();
};
module.exports = getClase;
