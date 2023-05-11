const {Ejercicio} = require('../db');
const axios = require('axios');




const getEjercicios = async () =>{


    const musculos = ['abdominals', 'abductors', 'adductors', 'biceps', 'calves', 'chest', 'forearms', 
    'glutes', 'hamstrings', 'lats', 'lower_back', 'middle_back', 'neck', 'quadriceps', 'traps', 'triceps'];

    const allExercises = [];    

    for (let index = 0; index < musculos.length; index++) {
        const element = musculos[index];
        const ejerciciosPorGrupo = axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${element}`, { 
            headers: {
            'X-Api-Key': 'rJLHZ3xHnrXhVO7TeiYG6A==HEblEtWX8CXXwTfp'
            }
            }).then(response => response)
        
        ejerciciosPorGrupo.forEach(ejercicio =>{allExercises.push(ejercicio)} );
    }

}



module.exports = getEjercicios;
