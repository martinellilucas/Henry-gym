const postRutinas = require('../controllers/postRutina')

const handlerPostRutinas = async (req, res) => {
try {
    const {
        grupoMuscular,
        imagen,
        ejercicios,
        difficulty
    } = req.body

    const rutinaCreada = await postRutinas({grupoMuscular,difficulty,imagen,ejercicios})


    res.status(200).send(`Rutina creada ${rutinaCreada}`)
} catch(e) {
    
    res.status(400).send(`este es el error ${e}`)
}
}

module.exports = handlerPostRutinas;