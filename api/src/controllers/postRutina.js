const { Ejercicio, Rutina } = require("../db");

const postRutinas = async ({
  grupoMuscular,
  imagen,
  difficulty,
  ejercicios,
}) => {
  console.log(
    `entro aca papa, estoy buscas ${
      (grupoMuscular, imagen, difficulty, ejercicios)
    }`
  );

  const newRutina = await Rutina.create({
    grupoMuscular,
    difficulty,
    imagen,
  });

  const ejerciciosDb = await Ejercicio.findAll({
    where: {
      name: ejercicios,
    },
  });

  const creado = await newRutina.addEjercicio(ejerciciosDb);

  return creado;
};

module.exports = postRutinas;
