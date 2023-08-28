// Importación de las bibliotecas necesarias
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import * as db from "./database.js"; // Asegúrate de ajustar la ruta y la extensión
import dotenv from "dotenv";
import routes from "./routes/routes.js"; // Asegúrate de ajustar la ruta y la extensión
dotenv.config();

// Creación de una instancia de la aplicación Express
const app = express();

// Configuración de middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet()); // Middleware para mejorar la seguridad de la aplicación
app.use(morgan("dev")); // Middleware para el registro de solicitudes en la consola
app.use(routes);

// Sincronización de modelos con la base de datos
db.sequelize
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
    db.conectarDB(); // Conexión a la base de datos utilizando la función conectarDB
  } catch (err) {
    console.error(err);
  }
});
