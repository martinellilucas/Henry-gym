const getNameEjercicio = require('../controllers/getNameEjercicio');

const handlerNameEjercicios = async(req, res) => {
  try {
    const name = req.query.name;
    const consulta = await getNameEjercicio(name);
    res.status(200).json(consulta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerNameEjercicios;