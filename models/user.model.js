const Proyecto = require("./proyecto.model"); // Importación del modelo Proyecto

// Definición del modelo "Usuarios"
const Usuarios = sequelize.define(
  "usuarios",
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
    createdAt: true, // Habilita el registro de la fecha de creación
    updatedAt: true, // Habilita el registro de la fecha de actualización
    deletedAt: true, // Habilita el registro de la fecha de eliminación (para soft deletes)
    tableName: "Usuarios", // Especifica el nombre de la tabla en la base de datos
  }
);

// Sincronización del modelo con la base de datos
Usuario.sync(); // Sincroniza el modelo con la base de datos

// Exportación del modelo para su uso en otras partes de la aplicación
module.exports = Usuario;
