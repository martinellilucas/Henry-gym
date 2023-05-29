const putClienteSus = require("../controllers/putClienteSus");

const handlerPutCliente = async (req, res) => {
  try {
    const { email } = req.params;
    const { tipoDeSuscripcion, isAdmin, isBanned } = req.body;
    res
      .status(200)
      .json(await putClienteSus(email, tipoDeSuscripcion, isAdmin, isBanned));
  } catch (error) {
    res.status(400).json({ error: error.msg });
  }
};

module.exports = handlerPutCliente;
