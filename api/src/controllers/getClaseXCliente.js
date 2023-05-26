const { Cliente, Clase, ClaseXCliente } = require("../db");

const getClaseXCliente = async (clienteID) => {
    const claseXCliente = await Cliente.findByPk(clienteID, {
        include:{
          model: Clase,
          through:{
            model: ClaseXCliente
          }
        }
      });
  

  return claseXCliente;
};

module.exports = getClaseXCliente;