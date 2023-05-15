const { Ejercicio,Rutina } = require("../db");

const postRutinas = async ({
  grupoMuscular,
  imagen,
  difficulty,
  ejercicios,
}) => {

  const nombres = [];
  ejercicios.forEach((element) => {
    nombres.push(element.name);
  });


  const newRutina = await Rutina.create({
    grupoMuscular,
    difficulty,
    imagen,
    ejercicios: [nombres],
  });

  ejercicios.forEach(async(ejer) => {
    await newRutina.addEjercicio(ejer)
  })
  

  return newRutina;
};

module.exports = postRutinas;
