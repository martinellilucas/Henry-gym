const { Cliente } = require("../db");

const postCliente = async (nombre, email) => {
  const newClient = await Cliente.create({nombre, email});
  return newClient;
};

module.exports = postCliente;