const postClase = require("../controllers/postClase");

const handlerPostClase = async (req, res) => {
    try {
      const { nombre, dias, horario } = req.body; 

      const claseCreada = await postClase( nombre, dias, horario );
  
      res.status(200).json(claseCreada);
    } catch (e) {
      res.status(400).send(`este es el error ${e.message}`);
    }
  };
  
  module.exports = handlerPostClase;