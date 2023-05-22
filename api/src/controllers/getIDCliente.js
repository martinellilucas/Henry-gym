const { Cliente } = require("../db");

const getIDCliente = async (id) => {
  const consulta = await Cliente.findOne({ where: { email: id } });

  return consulta;
};

module.exports = getIDCliente;
