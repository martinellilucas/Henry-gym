const { DataTypes, UUIDV1 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Suscripcion",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      tipo: {
        type: DataTypes.ENUM,
        values: ["Plata", "Oro", "Platino"],
        allowNull: false,
      },
      fechaSuscripcion: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      idCliente: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      pagado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false, // Desactiva los timestamps
    }
  );
};