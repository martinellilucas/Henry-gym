const postRutinas = require('../controllers/postRutina')

const handlerPostRutinas = async (req, res) => {
try {
    const {
        grupoMuscular,
        description,
        ejercicios,
        difficulty
    } = req.body

    const rutinaCreada = await postRutinas({grupoMuscular,difficulty,description,ejercicios})


    res.status(200).send(`Rutina creada ${rutinaCreada}`)
} catch(e) {
    
    res.status(400).send(`este es el error ${e}`)
}
}

module.exports = handlerPostRutinas;