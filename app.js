const express = require('express');
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const port = process.env.PORT || 4000;
const { conectarDB, sequelize } = require("./database");


require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


sequelize.sync({force:true}).then(() =>{
    console.log("Nos hemos conectado a la base de datos")
}

)
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Modelos sincronizados con éxito.");
  })
  .catch((error) => {
    console.error("Error al sincronizar modelos:", error);
  });




app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
    try {
        conectarDB();
    } catch (err) {
        console.error(err);
    }
});