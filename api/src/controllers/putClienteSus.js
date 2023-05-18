const {Cliente} = require("../db");

const putClienteSus = async (idcliente, nuevoTipoDeSuscripcion)=>{

    const response = await Cliente.update(
        { tipoDeSuscripcion: nuevoTipoDeSuscripcion },
        { where: { id: idcliente } }
      );

    return `La suscripcion del usuario ha sido actualizada a ${nuevoTipoDeSuscripcion}`


};