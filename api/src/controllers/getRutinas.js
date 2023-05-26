const rutinas = require("../../Rutinas.js");
const { Rutina } = require("../db");
const urls = require("../storage/imgURLS.js");
const getRutinas = async () => {
  const consult = await Rutina.findAll();
  if (!consult.length) {
    for (const rutina of rutinas) {
      await Rutina.create({
        difficulty: rutina.difficulty,
        ejercicios: [...rutina.ejercicios],
        imagen: urls[rutina.grupoMuscular[0]],
        grupoMuscular: [...rutina.grupoMuscular],
      });
    }
  }
  const rutinasDB = [...(await Rutina.findAll())];
  return rutinasDB;
};

module.exports = getRutinas;
