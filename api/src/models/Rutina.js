const { DataTypes, UUIDV1 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Rutina', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    nivel: {
        type: DataTypes.ENUM,
        values: ['Principiante', 'Intermedio', 'Experto'], 
        allowNull: false
    }
  }, {
    timestamps: false // Desactiva los timestamps
  });
};