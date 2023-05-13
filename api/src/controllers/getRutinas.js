const rutinas = require("../../Rutinas.js");
const { Rutina } = require("../db");

const getRutinas = async () => {
  const consult = await Rutina.findAll();
  if (!consult.length) {
    rutinas.map(async (rutina) => {
      await Rutina.create({
        difficulty: rutina.difficulty,
        grupoMuscular: [...rutina.grupoMuscular],
      });
    });
    return await Rutina.findAll();
  } else {
    return await Rutina.findAll();
  }
};

module.exports = getRutinas;
