import { DataTypes } from "sequelize";
import { sequelize } from "../database.js"; // Asegúrate de que esta ruta sea correcta
import Proyecto from "./proyecto.model.mjs"; // Importa el modelo Proyecto con extensión .mjs

const Usuario = sequelize.define(
  "Usuarios", // El nombre de la tabla en la base de datos
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
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
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "Usuarios",
  }
);

// Sincronización del modelo con la base de datos
await Usuario.sync(); // Utiliza await ya que la sincronización es asíncrona

// Exportación del modelo para su uso en otras partes de la aplicación
export default Usuario;
