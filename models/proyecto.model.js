const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");
const Usuario = require("./usuario.model");

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
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "Proyecto",
  }
);

Proyecto.belongsTo(Usuario); // Relación: Un proyecto pertenece a un usuario
Usuario.hasMany(Proyecto); // Un usuario puede tener varios proyectos
Proyecto.sync();
// Agregar el método .sync() para crear las tablas automáticamente

module.exports = Proyecto;
