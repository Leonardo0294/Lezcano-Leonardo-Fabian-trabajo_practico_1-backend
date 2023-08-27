const { Tarea } = require("../models/tareas.model"); // Importación del modelo "Tarea"

// Objeto que contendrá los métodos de los controladores
const ctrlTarea = {};

// Controlador para crear una nueva tarea
ctrlTarea.crearTarea = async (req, res) => {
  try {
    const nuevaTarea = await Tarea.create(req.body);
    res.status(201).json(nuevaTarea);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear tarea" });
  }
};

// Controlador para obtener todas las tareas
ctrlTarea.obtenerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.findAll();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener tareas" });
  }
};

// Controlador para obtener una tarea por su ID
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

// Controlador para actualizar una tarea por su ID
ctrlTarea.actualizarTarea = async (req, res) => {
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

// Controlador para eliminar una tarea por su ID
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

module.exports = ctrlTarea; // Exportación del objeto de controladores
