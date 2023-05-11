const { DataTypes, UUIDV1 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Ejercicio', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grupoMuscular: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false // Desactiva los timestamps
  });
};