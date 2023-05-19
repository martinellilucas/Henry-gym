const createProduct = require('../controllers/getSuscripcion');


const handlerGetSuscripcion = async (req, res) => {
    try {
      const consulta = await getNameEjercicio()
      res.status(200).json("Estoy en la ruta para traer una suscripcion");
    } catch (e) {
      res.status(400).send(`este es el error ${e}`);
    }
  };
  
 module.exports = handlerGetSuscripcion;