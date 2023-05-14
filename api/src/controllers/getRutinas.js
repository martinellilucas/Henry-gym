const rutinas = require("../../Rutinas.js");
const { Rutina } = require("../db");
const urls = require("../storage/imgURLS.js");
const getRutinas = async () => {
  const consult = await Rutina.findAll();
  if (!consult.length) {
    rutinas.map(async (rutina) => {
      await Rutina.create({
        difficulty: rutina.difficulty,
        ejercicios: [...rutina.ejercicios],
        imagen: urls[rutina.grupoMuscular[0]],
        grupoMuscular: [...rutina.grupoMuscular],
      });
    });
    return await Rutina.findAll();
  } else {
    return await Rutina.findAll();
  }
};

module.exports = getRutinas;
