const { Cliente } = require("../db");

const putClienteSus = async (emailcliente, nuevoTipoDeSuscripcion) => {
  const response = await Cliente.update(
    { tipoDeSuscripcion: nuevoTipoDeSuscripcion },
    { where: { email: emailcliente } }
  );

  return `La suscripcion del usuario ha sido actualizada a ${nuevoTipoDeSuscripcion}`;
};

module.exports = putClienteSus;
