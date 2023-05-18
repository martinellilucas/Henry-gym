const postCliente = require("../controllers/postCliente");

const handlerPostCliente = async (req, res) => {
  try {
    const { nombre, email } = req.body;

    const clienteCreado = await postCliente(
        nombre, 
        email
    );

    res.status(200).json(clienteCreado);
  } catch (e) {
    res.status(400).send(`este es el error ${e}`);
  }
};

module.exports = handlerPostCliente;
