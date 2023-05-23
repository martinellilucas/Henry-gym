const { Comentario } = require("../db");



const getComentarios = async () => {
  
    return await Comentario.findAll();
  }
;

module.exports = getComentarios;