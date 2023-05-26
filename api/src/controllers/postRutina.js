const { Ejercicio, Rutina } = require("../db");
const cloudinary = require('cloudinary').v2;
const subirImagen = require('../utils/cloudinary')
const fs = require('fs-extra')


const postRutinas = async (ejercicios, imagen) => {

  const ejercicio = JSON.parse(ejercicios)

  console.log(ejercicio);

  const nombres = [];
  const musculos = []
  let difficulty = "";

  
  

  const begginer = ejercicio.filter((elem) => elem.difficulty === 'beginner').length;
  const intermediate = ejercicio.filter((elem) => elem.difficulty === "intermediate").length;
  const expert = ejercicio.filter((elem) => elem.difficulty === "expert").length;

  if(begginer > intermediate && begginer > expert){
    difficulty = "beginner";
  }

  if(intermediate > begginer && intermediate > expert){
    difficulty = "intermediate";
  }

  if(expert > begginer && expert > intermediate){
    difficulty = "expert";
  }

  ejercicio.forEach((element) => {
    musculos.push(element.muscle)
  })

  ejercicio.forEach((element) => {
    nombres.push(element.name);
  });

 
  const myArrayClean = new Set(musculos) 

  let result = [...myArrayClean]
  
  const resultado = await subirImagen(imagen.tempFilePath);
  
  if(resultado){
    fs.unlink(imagen.tempFilePath)
  }

  console.log(result);
  const newRutina = await Rutina.create({
    difficulty,
    grupoMuscular : result,
    ejercicios: [...nombres],
    imagen : resultado.secure_url
  });

  for (const ejer of ejercicio) {
    await newRutina.addEjercicio(ejer.id);
  }

  return newRutina;
};

module.exports = postRutinas;
