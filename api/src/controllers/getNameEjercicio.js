const { Ejercicio } = require('../db');
const { Op } = require('sequelize');

const getNameEjercicio = async(nameQuery) => {
    nameQuery = nameQuery.charAt(0).toUpperCase() + nameQuery.slice(1).toLowerCase();

    const ejercicios = await Ejercicio.findAll({
        where: {
          name: {
            [Op.startsWith]: nameQuery
          }
        }
      });
    return ejercicios
}


module.exports = getNameEjercicio;
