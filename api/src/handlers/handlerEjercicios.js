const getEjercicios = require('../controllers/Getejercicios');

const handlerEjercicios = async(req, res) => {
  try {
    const ejercicios = await getEjercicios();
    res.status(200).json(ejercicios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerEjercicios;
