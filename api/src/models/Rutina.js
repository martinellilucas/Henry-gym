const { DataTypes, UUIDV1 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Rutina",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      difficulty: {
        type: DataTypes.ENUM,
        values: ["beginner", "intermediate", "expert"],
        allowNull: false,
      },
      grupoMuscular: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      ejercicios: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdByDB: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false, // Desactiva los timestamps
    }
  );
};
