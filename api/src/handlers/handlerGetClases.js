const getClase = require('../controllers/getClase');

const handlerGetClase = async(req, res) => {
  try {
    const ejercicios = await getClase();
    res.status(200).json(ejercicios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetClase;
