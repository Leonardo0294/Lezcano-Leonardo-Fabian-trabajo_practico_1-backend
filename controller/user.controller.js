// Importación del modelo "Tarea"
import Tarea from "../models/tareas.model.js"; // Asegúrate de ajustar la ruta y la extensión

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

// ... los otros controladores ...

export default ctrlTarea; // Exportación del objeto de controladores
