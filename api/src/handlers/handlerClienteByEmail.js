const getClienteByEmail = require("../controllers/getClienteByEmail");

const handlerClienteByEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const ejercicio = await getClienteByEmail(id);
    res.status(200).json(ejercicio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerClienteByEmail;
