const { DataTypes, UUIDV1 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Clase",
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
      dias: {
        type: DataTypes.ARRAY(
          DataTypes.ENUM(
            "Mondays",
            "Tuesdays",
            "Wednesdays",
            "Thursdays",
            "Fridays",
            "Saturdays"
          )
        ),
        allowNull: false,
      },
      horario: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      timestamps: false, // Desactiva los timestamps
    }
  );
};
