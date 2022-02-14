const { Router } = require("express");
const { Country, Activity } = require("../db.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//Ruta GET /countries: devuelvo un listado con todos los paises    y
//GET /countries?name=“…”: devuelvo solo el pais que cincida con el nombre pasado por query!
router.get("/Countries", async (req, res) => {
  try {
    const { name } = req.query;
    if (name === undefined || !name) {
      const allcountries = await Country.findAll({
        include: [{ model: Activity }],
      });
      res.send(allcountries);
    } else {
      const nameCountries = await Country.findAll({
        where: {
          name: name.toLowerCase(),
        },
        //include: Activity,
      });
      if (!nameCountries[0]) {
        res.status(404).send("El nombre de ese pais no esta en la DB");
      }
      res.send(nameCountries);
    }
  } catch (error) {
    res.send("Country not Found :(");
  }
});

//Ruta GET /countries/{idPais}: Cuando me pasan el codigo de un pais por params!
router.get("/Countries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (typeof id === "string" && id.length === 3) {
      const filtered_country = await Country.findByPk(id.toUpperCase(), {
        include: Activity,
      });

      filtered_country
        ? res.send(filtered_country)
        : res.status(409).send({ error: "El id del pais ingresado no existe" });
    } else {
      res.status(411).send({
        error:
          "No se permiten numeros, tiene que ser un dato con solamente 3 letras",
      });
    }
  } catch (e) {
    res.send(e);
  }
});

//POST /activity: RECIBE LOS DATOS POR BODY Y ME CREA UNA NUEVA ACTIVIDAD TURISTICA.

router.post("/activity", async (req, res) => {
  try {
    const { name, dificulty, duration, season, countryId } = req.body;
    if (name && dificulty && duration && season && countryId) {
      //No hace falta verificar si es un num entre 0 y 5 o si coincide con alguna temporada porque seran inputs del tipo selects.
      const find_country = await Country.findAll({
        where: {
          id: countryId,
        },
      });

      if (find_country[0]) {
        const newActivity = await Activity.create({
          name,
          dificulty,
          duration,
          season,
        });
        newActivity.addCountries(find_country);
        res.send(newActivity);
      } else {
        res
          .status(409)
          .send("No se pudo crear la actividad, ingrese  el id de algun pais!");
      }
    } else {
      res.status(409).send({
        error:
          "No se pudo crear la actividad, selecciona las caracteristicas  para crearla!",
      });
    }
  } catch (e) {
    res.send(e);
  }
});

//Muestro todas las actividades creadas
router.get("/activity", async (req, res) => {
  try {
    let response = await Activity.findAll();
    res.send(response);
  } catch (e) {
    res.send();
  }
});
module.exports = router;
