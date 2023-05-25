const postClaseXCliente = require("../controllers/postClaseXCliente");

const handlerPostClaseXCliente = async (req, res) => {
  try {
    const {clienteId, claseId} = req.body;
    const claseInscrita = await postClaseXCliente(clienteId, claseId);
    res.status(200).json({mensaje: `Inscribiste la clase ${claseInscrita}`});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPostClaseXCliente;
