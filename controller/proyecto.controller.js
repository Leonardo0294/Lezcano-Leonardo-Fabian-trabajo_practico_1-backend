const { Proyecto } = require('../models/proyecto.model');
const ctrl = {};

ctrl.crearProyecto = async (req, res) => {
  try {
    const { nombre } = req.body;
    // Validaciones
    if (!nombre) {
      return res.status(400).json({ error: 'Nombre del proyecto es obligatorio' });
    }

    const proyecto = await Proyecto.create({ nombre });
    return res.status(201).json(proyecto);
  } catch (error) {
    console.error('Error al crear proyecto:', error);
    return res.status(500).json({ error: 'No se pudo crear el proyecto' });
  }
}

ctrlPlaylist.obtenerPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.findAll();
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener proyecto" });
  }
};

ctrlProyecto.obtenerProyecto = async (req, res) => {
  try {
    const proyecto = await Proyecto.findByPk(req.params.id);
    if (proyecto) {
      res.json(playlist);
    } else {
      res.status(404).json({ mensaje: "Proyecto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener playlist" });
  }
};

ctrlProyecto.actualizarProyecto = async (req, res) => {
  try {
    const proyecto = await Proyecto.findByPk(req.params.id);
    if (playlist) {
      await playlist.update(req.body);
      res.json(playlist);
    } else {
      res.status(404).json({ mensaje: "Proyecto no encontrada" });
    }
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar proyecto" });
  }
};

ctrlPlaylist.eliminarProyecto = async (req, res) => {
  try {
    const playlist = await Playlist.findByPk(req.params.id);
    if (playlist) {
      await playlist.destroy();
      res.json({ mensaje: "ProyectoEliminado" });
    } else {
      res.status(404).json({ mensaje: "Proyecto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar proyecto" });
  }
};

// Otros métodos del CRUD para Proyecto, como obtener, actualizar y eliminar proyectos, se implementan de manera similar.

// Controlador para asignar un usuario a un proyecto
ctrl.asignarUsuarioAProyecto = async (req, res) => {
  try {
    const { usuarioId } = req.body;
    const { proyectoId } = req.params;

    const proyecto = await Proyecto.findByPk(proyectoId);
    if (!proyecto) {
      return res.status(404).json({ error: 'El proyecto no existe' });
    }

    const usuario = await Usuario.findByPk(usuarioId);
    if (!usuario) {
      return res.status(404).json({ error: 'El usuario no existe' });
    }

    // Asignar el usuario al proyecto
    await proyecto.setUsuario(usuario);

    return res.status(200).json({ mensaje: 'Usuario asignado al proyecto correctamente' });
  } catch (error) {
    console.error('Error al asignar usuario a proyecto:', error);
    return res.status(500).json({ error: 'No se pudo asignar el usuario al proyecto' });
  }
}

module.exports = ctrl;