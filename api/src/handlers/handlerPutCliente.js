const putClienteSus = require("../controllers/putClienteSus");

const handlerPutCliente = async (req, res) => {
  try {
    const { email } = req.params;
    const { tipoDeSuscripcion } = req.body;
    res.status(200).json(await putClienteSus(email, tipoDeSuscripcion));
  } catch (error) {
    res.status(400).json({ error: error.msg });
  }
};

module.exports = handlerPutCliente;
