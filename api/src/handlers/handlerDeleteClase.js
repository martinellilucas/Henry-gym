
const deleteClase = require("../controllers/deleteClase");
const handlerDeleteClase = async () =>{
    try {
        const {id} = req.params;

        const consulta = await deleteClase(id);
        return consulta;
      } catch (error) {
        throw new Error('Ocurrió un error al eliminar la clase: ' + error.message);
      }
}

module.exports = handlerDeleteClase;