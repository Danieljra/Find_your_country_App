const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define("activity", {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true, //para que no se me creen 2 actividades con el mismo nombre
    },

    dificulty: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
      },
      defaulValue: 0,
    },

    duration: {
      type: DataTypes.INTEGER,
      defaulValue: 0,
      allowNull: true,
    },

    season: {
      type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
      allowNull: true,
    },
  });
};
