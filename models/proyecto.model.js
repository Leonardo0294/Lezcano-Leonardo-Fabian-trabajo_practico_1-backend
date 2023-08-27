// Importación de las bibliotecas necesarias
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database"); // Importación de la instancia de Sequelize previamente configurada
const Usuario = require("./usuario.model"); // Importación del modelo de Usuario para establecer relaciones

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
    deletedAt: true, // Habilita el registro de la fecha de eliminación (para soft deletes)
    tableName: "Proyecto", // Especifica el nombre de la tabla en la base de datos
  }
);

// Establecimiento de relaciones entre modelos
Proyecto.belongsTo(Usuario); // Establece la relación: Un proyecto pertenece a un usuario
Usuario.hasMany(Proyecto); // Establece la relación: Un usuario puede tener varios proyectos

// Sincronización del modelo con la base de datos
Proyecto.sync(); // Sincroniza el modelo con la base de datos, creando la tabla si no existe

// Exportación del modelo para su uso en otras partes de la aplicación
module.exports = Proyecto;
