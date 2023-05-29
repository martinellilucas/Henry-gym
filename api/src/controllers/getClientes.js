const { Cliente } = require("../db");



const getClientes = async () => {
  
    return await Cliente.findAll();
  }
;

module.exports = getClientes;