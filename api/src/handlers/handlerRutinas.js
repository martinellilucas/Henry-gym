const getRutinas = require("../controllers/getRutinas");

const handlerRutinas = async (req, res) => {
  try {
    res.status(200).json(await getRutinas());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerRutinas;
