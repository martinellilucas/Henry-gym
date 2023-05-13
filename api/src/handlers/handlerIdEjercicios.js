const getIDEjercicio = require('../controllers/getIDEjercicio')

const handlerIdEjercicios = async(req, res) => {
  try {
    const { id } = req.params;
    const ejercicio = await getIDEjercicio(id);
    res.status(200).json(ejercicio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerIdEjercicios;
