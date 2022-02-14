const axios = require("axios");
const { Country } = require("../db.js");

const URLAPI = "https://restcountries.com/v3/all";
const load_my_db = async () => {
  try {
    const Infoapi = await axios.get(URLAPI);
    const necessaryInfo = await Infoapi.data.map((c) => {
      return {
        id: c.cca3,
        name: c.name.common,
        flagImage: c.flags[0],
        continent: c.continents[0],
        capital: c.capital,
        subregion: c.subregion,
        area: c.area,
        population: c.population,
      };
    });

    necessaryInfo.map(async (c) => {
      await Country.findOrCreate({
        where: {
          id: c.id,
          name: c.name.toLowerCase(),
          flagImage: c.flagImage,
          continent: c.continent,
          capital: c.capital ? c.capital[0] : "Este pais no tiene capital",
          subregion: c.subregion ? c.subregion : "Esta pais no tiene region",
          area: c.area,
          population: c.population,
        },
      });
    });
    return necessaryInfo;
  } catch (e) {
    console.log("ERROR EN LA DB DEL TIPO -> ", e);
  }
};

module.exports = { load_my_db };
