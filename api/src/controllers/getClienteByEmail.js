const { Cliente } = require("../db");
const { Op } = require("sequelize");

const getClienteByEmail = async (email) => {
  let consulta;
  const UUID =
    /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;
  if (!UUID.test(email)) {
    consulta = await Cliente.findOne({
      where: { email: { [Op.iLike]: `${email}%` } },
    });
  } else {
    consulta = await Cliente.findOne({ where: { id: email } });
  }

  return consulta;
};

module.exports = getClienteByEmail;
