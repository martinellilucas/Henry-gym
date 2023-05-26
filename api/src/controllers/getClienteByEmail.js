const { Cliente } = require("../db");

const getClienteByEmail = async (email) => {
  let consulta;
  if (email.includes("@")) {
    consulta = await Cliente.findOne({ where: { email: email } });
  } else {
    consulta = await Cliente.findOne({ where: { id: email } });
  }

  return consulta;
};

module.exports = getClienteByEmail;
