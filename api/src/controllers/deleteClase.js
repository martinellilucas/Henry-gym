const { Clase } = require("../db");

const deleteClase = async (id) => {
  const clase = await Clase.findByPk(id)
  if(!clase){
    throw new Error('No se encontró la clase con el ID proporcionado');
  }

  await clase.destroy();
  return "Clase eliminada";
};
module.exports = deleteClase;