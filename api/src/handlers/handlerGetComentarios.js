const getComentarios = require('../controllers/getComentarios');

const handlerGetComentarios = async(req, res) => {
  try {
    const comentarios = await getComentarios();
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetComentarios;