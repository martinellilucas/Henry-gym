const { Cliente } = require("../db");

const postCliente = async (name,email,email_verified,picture) => {

  const newClient = await Cliente.findOrCreate({
    where : {
    nombre : name,
    email : email,
    emailVerified: email_verified,
    picture : picture
    }
  })

  
};

module.exports = postCliente;