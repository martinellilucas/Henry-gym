const postComentario = require("../controllers/postComentario");
const handlerPostComentarios = async (req, res) => {
    try {
        const {email, clase, texto} = req.body;
      
        const comentarioCreado = await postComentario(email, clase, texto);

        res.status(200).json(comentarioCreado);
    } catch (e) {
      res.status(400).json({error:e.message});
    }
  };
  
  module.exports = handlerPostComentarios;