const { DataTypes, UUIDV1 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Entrenador",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      especialidad: {
        type: DataTypes.STRING,
        allowNull: false
      },
      identificacion: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      timestamps: false, // Desactiva los timestamps
    }
  );
};