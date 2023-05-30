const deleteClase = require("../controllers/deleteClase");
const handlerDeleteClase = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json(await deleteClase(id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerDeleteClase;
