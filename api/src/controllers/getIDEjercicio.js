const { Ejercicio } = require('../db');


const getIDEjercicio = async(id) => {
    const consulta = await Ejercicio.findByPk(id);
    
    return consulta
}


module.exports = getIDEjercicio;
