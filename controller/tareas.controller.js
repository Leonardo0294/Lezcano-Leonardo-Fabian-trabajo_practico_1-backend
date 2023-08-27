const { Tarea } = require('../models/tareas.model');


// Otros métodos del CRUD para Tarea, como obtener, actualizar y eliminar tareas, se implementan de manera similar.
ctrlTarea.crearTarea = async (req, res) => {
  try {
    const nuevaMusica = await Tarea.create(req.body);
    res.status(201).json(nuevaTarea);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear Tarea" });
  }
};

ctrlTarea.obtenerTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findAll();
    res.json(tarea);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener tareas" });
  }
};

ctrlTarea.obtenerTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (tarea) {
      res.json(tarea);
    } else {
      res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener tarea" });
  }
};

ctrlMusica.actualizarTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (tarea) {
      await tarea.update(req.body);
      res.json(tarea);
    } else {
      res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar tarea" });
  }
};

ctrlTarea.eliminarTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (tarea) {
      await tarea.destroy();
      res.json({ mensaje: "Tarea eliminada" });
    } else {
      res.status(404).json({ mensaje: "Tarea no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar tarea" });
  }
};

module.exports = ctrlTarea;
