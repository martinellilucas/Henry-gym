const { ClaseXCliente } = require("../db");

const deleteClaseXCliente = async (clienteID, claseID) => {
  const claseXCliente = await ClaseXCliente.findOne({
    where: {
      ClienteId: clienteID,
      ClaseId: claseID,
    },
  });
  if (!claseXCliente) {
    return { error: "La clase no está asignada al cliente" };
  }
  await claseXCliente.destroy();

  return { message: "La clase ha sido eliminada del cliente" };
};

module.exports = {
  deleteClaseXCliente,
};
