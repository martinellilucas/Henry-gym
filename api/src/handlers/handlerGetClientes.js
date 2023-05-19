const getClientes = require('../controllers/getClientes');

const handlerGetClientes = async(req, res) => {
  try {
    const ejercicios = await getClientes();
    res.status(200).json(ejercicios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetClientes;
