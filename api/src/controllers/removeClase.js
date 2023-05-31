const { Cliente, Clase } = require("../db");

const removeClase = async (id, claseId) => {
  const cliente = await Cliente.findByPk(id);
  const clase = await Clase.findByPk(claseId);

  await cliente.removeClase(clase);

  return cliente;
};

module.exports = removeClase;
