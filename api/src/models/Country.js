const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("country", {
    id: {
      // api: cca3
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
    },

    name: {
      //api: name.common
      type: DataTypes.STRING,
      allowNull: false,
    },

    flagImage: {
      //api: flags[0]
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: "NOT FOUND :(",
    },

    continent: {
      //api: continents[0]
      allowNull: false,
      type: DataTypes.STRING,
    },

    capital: {
      //api: capital[0]
      allowNull: false,
      type: DataTypes.STRING,
    },

    subregion: {
      //api: subregion
      type: DataTypes.STRING,
      allowNull: true,
    },

    area: {
      //api: area
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    population: {
      //api: population
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
