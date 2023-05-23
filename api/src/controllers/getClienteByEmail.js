const { Cliente } = require("../db");

const getClienteByEmail = async (email) => {
  const consulta = await Cliente.findOne({ where: { email: email } });

  return consulta;
};

module.exports = getClienteByEmail;
