const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { load_my_db } = require("./src/load_my_db/load_my_db.js");
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console

    //Voy a precargar mi tabla  Countries de mi DB justo despues de que se levante el servidor.
    load_my_db(); //Invocando mi funcion para que se ejecute.
  });
});
