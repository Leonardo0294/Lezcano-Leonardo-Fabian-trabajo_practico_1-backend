const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");
const Proyecto = require("./proyecto.model");

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
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "Tareas",
  }
);

Tarea.belongsTo(Proyecto); // Relación: Una tarea pertenece a un proyecto
Proyecto.hasMany(Tarea); // Un proyecto puede tener varias tareas
Tarea.sync({ alter: true });
// Agregar el método .sync() para crear las tablas automáticamente

module.exports = Tarea;
