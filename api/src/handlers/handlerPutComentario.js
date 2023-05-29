const putComentario = require("../controllers/putComentario");

const handlerPutComentario = async (req, res) => {
  try {
    const { id } = req.params;
    const { isBanned } = req.body;
    res.status(200).json(await putComentario(id, isBanned));
  } catch (error) {
    res.status(400).json({ error: error.msg });
  }
};

module.exports = handlerPutComentario;
