const { DataTypes, UUIDV1 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Cliente', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emailVerified : {
      type : DataTypes.BOOLEAN,
      allowNull : false 
    },
    tipoDeSuscripcion: {
      type: DataTypes.ENUM,
      values: ["Bronze", "Silver", "Gold", "Platinum"],
      defaultValue: 'Bronze',
      allowNull: false,
    },
    picture :{
      type : DataTypes.STRING,
      allowNull : true
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    isBanned : {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  }, {
    timestamps: false // Desactiva los timestamps
  });
};