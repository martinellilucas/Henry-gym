const handlerPutisAdminCliente = async (req, res) => {
  try {

    res.status(200).json({mensaje: "Estas en la ruta put isAdmin"});
  } catch (error) {
    res.status(400).json({ error: error.msg });
  }
};

module.exports = handlerPutisAdminCliente;
