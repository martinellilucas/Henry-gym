const { Cliente } = require("../db");
const { Clase } = require("../db");

const deleteClaseXCliente = async (clienteId, claseId) => {
  const cliente = await Cliente.findByPk(clienteId);
  const clase = await Clase.findByPk(claseId);

  await cliente.removeClase(clase);

  return clase;
};

module.exports = deleteClaseXCliente;
