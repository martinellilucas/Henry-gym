const getRutinas = require('../controllers/getRutinas')


const handlerRutinas = (req, res) => {
  try {

    res.status(200).send('Holaaaaaa');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerRutinas;
