// Importación del modelo "Proyecto" y otros posibles modelos relacionados (como "Playlist" y "Usuario")
const { Proyecto, Playlist, Usuario } = require("../models/proyecto.model");

// Objeto que contendrá los métodos de los controladores
const ctrl = {};

// Controlador para crear un nuevo proyecto
ctrl.crearProyecto = async (req, res) => {
  try {
    const { nombre } = req.body;
    // Validaciones
    if (!nombre) {
      return res
        .status(400)
        .json({ error: "Nombre del proyecto es obligatorio" });
    }

    const proyecto = await Proyecto.create({ nombre });
    return res.status(201).json(proyecto);
  } catch (error) {
    console.error("Error al crear proyecto:", error);
    return res.status(500).json({ error: "No se pudo crear el proyecto" });
  }
};

// Controlador para obtener una lista de proyectos (playlists)
ctrl.obtenerPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.findAll();
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener proyectos" });
  }
};

// Controlador para obtener un proyecto por su ID
ctrl.obtenerProyecto = async (req, res) => {
  try {
    const proyecto = await Proyecto.findByPk(req.params.id);
    if (proyecto) {
      res.json(proyecto);
    } else {
      res.status(404).json({ mensaje: "Proyecto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener proyecto" });
  }
};

// Controlador para actualizar un proyecto por su ID
ctrl.actualizarProyecto = async (req, res) => {
  try {
    const proyecto = await Proyecto.findByPk(req.params.id);
    if (proyecto) {
      await proyecto.update(req.body);
      res.json(proyecto);
    } else {
      res.status(404).json({ mensaje: "Proyecto no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar proyecto" });
  }
};

// Controlador para eliminar un proyecto por su ID
ctrl.eliminarProyecto = async (req, res) => {
  try {
    const proyecto = await Proyecto.findByPk(req.params.id);
    if (proyecto) {
      await proyecto.destroy();
      res.json({ mensaje: "Proyecto eliminado" });
    } else {
      res.status(404).json({ mensaje: "Proyecto no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar proyecto" });
  }
};

// Controlador para asignar un usuario a un proyecto
ctrl.asignarUsuarioAProyecto = async (req, res) => {
  try {
    const { usuarioId } = req.body;
    const { proyectoId } = req.params;

    // Buscar el proyecto y el usuario
    const proyecto = await Proyecto.findByPk(proyectoId);
    const usuario = await Usuario.findByPk(usuarioId);

    if (!proyecto || !usuario) {
      return res
        .status(404)
        .json({ error: "Proyecto o usuario no encontrado" });
    }

    // Asignar el usuario al proyecto
    await proyecto.setUsuario(usuario);

    return res
      .status(200)
      .json({ mensaje: "Usuario asignado al proyecto correctamente" });
  } catch (error) {
    console.error("Error al asignar usuario a proyecto:", error);
    return res
      .status(500)
      .json({ error: "No se pudo asignar el usuario al proyecto" });
  }
};

module.exports = ctrl; // Exportación del objeto de controladores
