const getRutinasByID = require("../controllers/getRutinasByID");

const handlerRutinasByID = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json(await getRutinasByID(id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerRutinasByID;
