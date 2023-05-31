const { ClaseXCliente } = require("../db");

const deleteClaseXCliente = async (clienteID, claseID) => {
  const eliminado = await ClaseXCliente.destroy({
    where: {
      ClienteId: clienteID,
      ClaseId: claseID,
    },
    force: true,
  });
  return eliminado;
};

module.exports = deleteClaseXCliente;
