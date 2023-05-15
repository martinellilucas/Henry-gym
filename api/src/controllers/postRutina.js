const { Ejercicio, Rutina } = require("../db");

const postRutinas = async (difficulty, grupoMuscular, ejercicios, imagen) => {
  const nombres = [];
  ejercicios.forEach((element) => {
    nombres.push(element.name);
  });

  const newRutina = await Rutina.create({
    difficulty,
    grupoMuscular,
    ejercicios: [...nombres],
    imagen,
  });

  ejercicios.forEach(async (ejer) => {
    await newRutina.addEjercicio(ejer.id);
  });

  return newRutina;
};

module.exports = postRutinas;
