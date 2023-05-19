const postCliente = require("../controllers/postCliente");

const handlerPostCliente = async (req, res) => {
  try {
    const {name,email,email_verified,picture} = req.body;

    const cliente = await postCliente(
      name,email,email_verified,picture
    );

    res.status(200).json(cliente);
  } catch (e) {
    res.status(400).send(`este es el error ${e}`);
  }
};

module.exports = handlerPostCliente;
