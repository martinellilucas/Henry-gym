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
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    instructions: {
        type: DataTypes.TEXT,
        allowNull: false 
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    muscle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    difficulty : {
      type : DataTypes.ENUM,
      values: ['beginner', 'intermediate', 'expert'],
      allowNull: false 
    }
  }, {
    timestamps: false // Desactiva los timestamps
  });
};