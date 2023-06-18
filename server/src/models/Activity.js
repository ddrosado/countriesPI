const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    dificulty: {
      type: DataTypes.BLOB
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false
    },
    season: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
};