const getClaseXCliente = require("../controllers/getClaseXCliente");

const handlerGetClaseXCliente = async(req, res) => {
  try {
    const { id } = req.params;
    const consulta = await getClaseXCliente(id);
    res.status(200).json(consulta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetClaseXCliente;
