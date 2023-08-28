import dotenv from "dotenv";
// Carga las variables de entorno desde el archivo .env
dotenv.config(); 
 // Importa Sequelize y otros componentes necesarios
import { Sequelize, DataTypes } from "sequelize";

// Crea una nueva instancia de conexión a la base de datos utilizando los datos de conexión proporcionados en las variables de entorno
const sequelize = new Sequelize(
  // Nombre de la base de datos
  process.env.DB_NAME,
  // Nombre de la base de datos
  process.env.DB_USER, // Usuario de la base de datos
  process.env.DB_PASSWORD, // Contraseña del usuario
  {
    host: process.env.DB_HOST, // Host de la base de datos
    dialect: process.env.DB_DIALECT, // Dialecto de la base de datos (por ejemplo, "mysql", "postgres", etc.)
    logging: console.log, // Habilita el registro de consultas SQL en la consola
  }
);

// En este punto, "sequelize" es la instancia de conexión que se utilizará para interactuar con la base de datos.

const conectarDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Base de datos Conectada");
  } catch (error) {
    console.log("ERROR AL CONECTAR DB: ", error);
  }
};

export { sequelize, DataTypes, conectarDB };
