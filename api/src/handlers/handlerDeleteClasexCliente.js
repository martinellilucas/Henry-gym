const { deleteClaseXCliente } = require("../controllers/deleteClasexCliente");

const deleteClasexClienteHandler = async (req, res) => {
  try {
    const { id, claseid } = req.params;
    res.status(200).json(await deleteClaseXCliente(id, claseid));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  deleteClasexClienteHandler,
};
