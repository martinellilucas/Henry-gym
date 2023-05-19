const postRutinas = require("../controllers/postRutina");

const handlerPostRutinas = async (req, res) => {
  try {
    const { difficulty, grupoMuscular, ejercicios, imagen } = req.body;

    const rutinaCreada = await postRutinas(
      difficulty,
      grupoMuscular,
      ejercicios,
      imagen
    );

    res.status(200).json(rutinaCreada);
  } catch (e) {
    res.status(400).send(`este es el error ${e.message}`);
  }
};

module.exports = handlerPostRutinas;
