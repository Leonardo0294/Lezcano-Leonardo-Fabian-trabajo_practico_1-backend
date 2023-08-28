// Importación del modelo "Proyecto" y otros posibles modelos relacionados (como "Playlist" y "Usuario")
import Proyecto from "../models/proyecto.model.mjs"; // Asegúrate de ajustar la ruta y la extensión

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

// ... los otros controladores ...

export default ctrl; // Exportación del objeto de controladores
