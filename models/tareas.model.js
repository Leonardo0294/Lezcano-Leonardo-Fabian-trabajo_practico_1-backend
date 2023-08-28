// Importación de las bibliotecas necesarias
import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database.js";
import Proyecto from "./proyecto.model.mjs"; // Nota la extensión .mjs

// Definición del modelo "Tarea"
const Tarea = sequelize.define(
  "Tarea",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
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
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "Tareas",
  }
);

// Establecimiento de relaciones entre modelos
Tarea.belongsTo(Proyecto);
Proyecto.hasMany(Tarea);

// Sincronización del modelo con la base de datos
await Tarea.sync({ alter: true });

// Exportación del modelo para su uso en otras partes de la aplicación
export default Tarea;
