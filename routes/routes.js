import { Router } from "express";
import ctrlUsuarios from "../controller/user.controller.js";
import ctrlProyectos from "../controller/proyecto.controller.js";
import ctrlTareas from "../controller/tareas.controller.js";
import { validateSchema } from "../middleware/validationSchema.js";
import { validar } from "../models/schema.js";
import { validarProyecto } from "../models/shema.proyecto.js";
import { validarTarea } from "../models/schema.tareas.js";

// Crear una instancia de Router de Express
const router = Router();

// Definición de rutas y configuración de controladores y validaciones

// Ruta para crear un usuario
router.post(
  "/crearusuario",
  validar, // Middleware para validar la solicitud
  validateSchema, // Middleware para validar el esquema de datos
  ctrlUsuarios.crearUsuario // Controlador para crear un usuario
);

// Ruta para crear un proyecto
router.post(
  "/crearproyecto",
  validarProyecto, // Middleware para validar el esquema de proyecto
  validateSchema, // Middleware para validar el esquema de datos
  ctrlProyectos.crearProyecto // Controlador para crear un proyecto
);

// Ruta para crear una tarea
router.post(
  "/creartarea",
  validarTarea, // Middleware para validar el esquema de tarea
  validateSchema, // Middleware para validar el esquema de datos
  ctrlTareas.crearTarea // Controlador para crear una tarea
);

// Exportación del enrutador configurado
export default router;
