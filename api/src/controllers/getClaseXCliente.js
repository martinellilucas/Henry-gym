const { Cliente } = require("../db");
const { Clase } = require("../db");

const getClaseXCliente = async (clienteID) => {
  const clienteXCliente = await Cliente.findByPk({
    where: { id: clienteID },
    include: Clase,
  });

  return clienteXCliente;
};

module.exports = getClaseXCliente;
