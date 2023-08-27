const { Usuario } = require('../models/user.model');
const ctrl = {};

ctrl.crearUsuario = async (req, res) => {
  try {
    const { nombre, email } = req.body;
    // Validaciones
    if (!nombre || !email) {
      return res.status(400).json({ error: 'Nombre y correo electrónico son obligatorios' });
    }

    const usuario = await Usuario.create({ nombre, email });
    return res.status(201).json(usuario);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    return res.status(500).json({ error: 'No se pudo crear el usuario' });
  }
}
ctrlUsuario.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener usuarios" });
  }
};

ctrlUsuario.obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener usuario" });
  }
};

ctrlUsuario.actualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
      await usuario.update(req.body);
      res.json(usuario);
    } else {
      res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar usuario" });
  }
};

ctrlUsuario.eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (usuario) {
      await usuario.destroy();
      res.json({ mensaje: "Usuario eliminado" });
    } else {
      res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar usuario" });
  }
};
module.exports = ctrl;
// Otros métodos del CRUD para Usuario, como obtener, actualizar y eliminar usuarios, se implementan de manera similar.
