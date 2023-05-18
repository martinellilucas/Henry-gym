const getIDCliente = require('../controllers/getIDCliente')

const handlerIDCliente = async(req, res) => {
  try {
    const { id } = req.params;
    const ejercicio = await getIDCliente(id);
    res.status(200).json(ejercicio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerIDCliente;