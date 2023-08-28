import { DataTypes } from "sequelize";
import { sequelize } from "../database.js"; // Asegúrate de que esta ruta sea correcta
import Proyecto from "./proyecto.model.js"; // Importa el modelo Proyecto con extensión .mjs

const Usuario = sequelize.define(
  // El nombre de la tabla en la base de datos
  "Usuarios",
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

// Establecimiento de relaciones entre modelos
Proyecto.belongsTo(Usuario); // Establece la relación: Un proyecto pertenece a un usuario
Usuario.hasMany(Proyecto); // Establece la relación: Un usuario puede tener varios proyectos

// Sincronización del modelo con la base de datos
await Usuario.sync(); // Utiliza await ya que la sincronización es asíncrona

// Exportación del modelo para su uso en otras partes de la aplicación
export default Usuario;
