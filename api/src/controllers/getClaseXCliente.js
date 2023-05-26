const { Cliente, Clase } = require("../db");

const getClienteClaseData = async (clienteId) => {
  const cliente = await Cliente.findByPk(clienteId);

  const clienteClaseData = await cliente.getClases({
    through: { attributes: [] }, // Opcional: para excluir atributos adicionales de la tabla intermedia
  });

  return clienteClaseData;
};

module.exports = getClienteClaseData;
