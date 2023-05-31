const { Clase } = require("../db");
const { Op } = require("sequelize");

const getClaseByName = async (name) => {
  let consulta;
  if (name.includes("-")) {
    consulta = await Clase.findOne({ where: { id: name } });
  } else {
    consulta = await Clase.findAll({
      where: { nombre: { [Op.iLike]: `${name}%` } },
    });
  }

  return consulta;
};

module.exports = getClaseByName;
