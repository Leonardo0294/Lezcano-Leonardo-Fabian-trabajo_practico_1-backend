// Importación de los módulos necesarios
import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database.js"; // Ajusta la ruta si es necesario
// Importación de la instancia de Sequelize previamente configurada
import Usuario from "./user.model.js"; // Importación del modelo de Usuario para establecer relaciones

// Definición del modelo "Proyecto"
const Proyecto = sequelize.define(
  "Proyecto",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    // Configuraciones adicionales del modelo
    createdAt: true, // Habilita el registro de la fecha de creación
    updatedAt: true, // Habilita el registro de la fecha de actualización
    deletedAt: true, // Habilita el registro de la fecha de eliminación
    tableName: "Proyecto", // Especifica el nombre de la tabla en la base de datos
  }
);



// Sincroniza el modelo con la base de datos, creando la tabla si no existe
await Proyecto.sync(); 

// Exportación del modelo para su uso en otras partes de la aplicación
export default Proyecto;
