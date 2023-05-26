const { Cliente } = require("../db");
const {Clase} = require("../db");

const postClaseXCliente = async (clienteId, claseId) => {

    const cliente = await Cliente.findByPk(clienteId);
    const clase = await Clase.findByPk(claseId);

    await cliente.addClase(clase);

  

    return clase;
};

module.exports = postClaseXCliente;
