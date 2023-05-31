const removeClase = require("../controllers/removeClase");

const handlerRemoveClase = async (req, res) => {
  try {
    const { id, claseId } = req.params;
    res.status(200).json(await removeClase(id, claseId));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerRemoveClase;
