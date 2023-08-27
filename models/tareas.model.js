// Importación de las bibliotecas necesarias
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database"); // Importación de la instancia de Sequelize previamente configurada
const Proyecto = require("./proyecto.model"); // Importación del modelo de Proyecto para establecer relaciones

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
    createdAt: true, // Habilita el registro de la fecha de creación
    updatedAt: true, // Habilita el registro de la fecha de actualización
    deletedAt: true, // Habilita el registro de la fecha de eliminación (para soft deletes)
    tableName: "Tareas", // Especifica el nombre de la tabla en la base de datos
  }
);

// Establecimiento de relaciones entre modelos
Tarea.belongsTo(Proyecto); // Establece la relación: Una tarea pertenece a un proyecto
Proyecto.hasMany(Tarea); // Establece la relación: Un proyecto puede tener varias tareas

// Sincronización del modelo con la base de datos
Tarea.sync({ alter: true }); // Sincroniza el modelo con la base de datos, aplicando cambios si es necesario

// Exportación del modelo para su uso en otras partes de la aplicación
module.exports = Tarea;
