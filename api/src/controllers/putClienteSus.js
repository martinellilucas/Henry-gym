const { Cliente } = require("../db");

const putClienteSus = async (
  emailcliente,
  nuevoTipoDeSuscripcion,
  isBanned,
  isAdmin
) => {
  if (isBanned === true || isBanned === false) {
    const response = await Cliente.update(
      { isBanned: isBanned },
      { where: { email: emailcliente } }
    );

    return `El usuario ${response.nombre} ha sido baneado/desbaneado`;
  }
  if (isAdmin === true || isAdmin === false) {
    const response = await Cliente.update(
      { isAdmin: isAdmin },
      { where: { email: emailcliente } }
    );

    return `El usuario ${response.nombre} ahora es Admin`;
  }
  if (nuevoTipoDeSuscripcion.length) {
    const response = await Cliente.update(
      { tipoDeSuscripcion: nuevoTipoDeSuscripcion },
      { where: { email: emailcliente } }
    );

    return `La suscripcion del usuario ha sido actualizada a ${nuevoTipoDeSuscripcion}`;
  }
};

module.exports = putClienteSus;
