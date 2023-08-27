// Importación de las bibliotecas necesarias
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const { conectarDB, sequelize } = require("./database"); // Importación de la función conectarDB y la instancia sequelize
require("dotenv").config();

// Creación de una instancia de la aplicación Express
const app = express();

// Configuración de middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet()); // Middleware para mejorar la seguridad de la aplicación
app.use(morgan("dev")); // Middleware para el registro de solicitudes en la consola

// Sincronización de modelos con la base de datos
sequelize
  .sync({ alter: true }) // Sincroniza los modelos con la base de datos, aplicando cambios si es necesario
  .then(() => {
    console.log("Modelos sincronizados con éxito.");
  })
  .catch((error) => {
    console.error("Error al sincronizar modelos:", error);
  });

// Configuración del puerto del servidor
const port = process.env.PORT || 4000;

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
  try {
    conectarDB(); // Conexión a la base de datos utilizando la función conectarDB
  } catch (err) {
    console.error(err);
  }
});
