const getComentarioByName = require("../controllers/getComentarioByName");

const handlerGetComentarioByName = async (req, res) => {
  try {
    const { name } = req.params;
    res.status(200).json(await getComentarioByName(name));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetComentarioByName;
