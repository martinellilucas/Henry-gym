const { Clase } = require("../db");
const getClase = async () => {
  
    return await Clase.findAll();
  }
;

module.exports = getClase;