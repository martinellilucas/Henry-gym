const postRutinas = require("../controllers/postRutina");

const handlerPostRutinas = async (req, res) => {
  try {
    const { ejercicios} = req.body;

    
    
    
    const imagen = req.files.imagen


    const rutinaCreada = await postRutinas(
      ejercicios,
      imagen
    );

    res.status(200).json(rutinaCreada);
  } catch (e) {
    res.status(400).send(`este es el error ${e.message}`);
  }
};

module.exports = handlerPostRutinas;
