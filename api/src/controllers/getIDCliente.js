const { Cliente } = require('../db');


const getIDCliente = async(id) => {
    const consulta = await Cliente.findByPk(id);
    
    return consulta
}


module.exports = getIDCliente;