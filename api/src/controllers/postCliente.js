const { Cliente } = require("../db");

const postCliente = async (name, email, email_verified, picture) => {
  if (email === "matiaascano@gmail.com") {
    const admin = await Cliente.findOrCreate({
      where: {
        nombre: name,
        email: email,
        emailVerified: email_verified,
        picture: picture,
        isAdmin: true,
      },
    });
    return admin;
  } else {
    const newClient = await Cliente.findOrCreate({
      where: {
        nombre: name,
        email: email,
        emailVerified: email_verified,
        picture: picture,
      },
    });
  }

  return newClient;
};

module.exports = postCliente;
