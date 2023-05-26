const { Clase } = require("../db");

const getClaseByName = async (name) => {
  let consulta;
  if(name.includes('-')){
    consulta = await Clase.findOne({ where: { id: name } });
  }
  else{
    consulta = await Clase.findOne({ where: { nombre: name } });
  }
  

  return consulta;
};

module.exports = getClaseByName;