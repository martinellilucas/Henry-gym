const getClienteClaseData = require("../controllers/getClaseXCliente");
const getClaseXCliente = require("../controllers/getClaseXCliente");

const handlerGetClaseXCliente = async (req, res) => {
  try {
    const { clienteId } = req.params;
    if (!clienteId) {
      return res.status(404).json({ error: "Cliente o clase no encontrado" });
    }
    const consulta = await getClienteClaseData(clienteId);
    res.status(200).json(consulta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetClaseXCliente;
