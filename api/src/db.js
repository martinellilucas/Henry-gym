require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_URL } = process.env;

/* const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/henrygym`,
  {
    logging: false,
    native: false,
  }
);
 */
const sequelize = new Sequelize( DB_URL,
  {
    logging: false,
    native: false,
  }
);



const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);

const { Cliente, Ejercicio, Rutina } = sequelize.models;

const RutinaxEjercicio = sequelize.define(
  "RutinaxEjercicio",
  {
    // Atributos específicos de la tabla intermedia
  },
  {
    timestamps: false, // Desactivar createdAt y updatedAt
  }
);

const RutinaxCliente = sequelize.define(
  "RutinaxCliente",
  {
    // Atributos específicos de la tabla intermedia
  },
  {
    timestamps: false, // Desactivar createdAt y updatedAt
  }
);

// Aca vendrian las relaciones

Rutina.belongsToMany(Ejercicio, { through: 'RutinaxEjercicio' });
Ejercicio.belongsToMany(Rutina, { through: 'RutinaxEjercicio' });

Rutina.belongsToMany(Cliente, { through: 'RutinaxCliente' });
Cliente.belongsToMany(Rutina, { through: 'RutinaxCliente' });



module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
