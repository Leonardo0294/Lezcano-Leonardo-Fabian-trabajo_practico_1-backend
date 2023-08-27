const express = require("express");
const { body, param } = require("express-validator");
const router = express.Router();
const {
  crearUsuario,
  obtenerUsuario,
  obtenerUsuarios,
  eliminarUsuario,
  actualizarUsuario,
} = require("../controllers/usuarioController");
const {
  crearProyecto,
  obtenerProyecto,
  obtenerProyectos,
  eliminarProyecto,
  actualizarProyecto,
} = require("../controllers/ProyectoController");
const {
  crearTareas,
  obtenerTareas,
  obtenerTareass,
  eliminarTareas,
  actualizarTareas,
} = require("../controllers/TareasController");

// Rutas para Usuario
router.post(
  "/usuarios",
  [
    body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
    body("correo").isEmail().withMessage("El correo electrónico no es válido"),
    body("contraseña").notEmpty().withMessage("La contraseña es obligatoria"),
  ],
  crearUsuario
);

router.get("/usuarios", obtenerUsuarios);

router.get(
  "/usuarios/:id",
  [param("id").isInt().withMessage("ID de usuario no válido")],
  obtenerUsuario
);

router.put(
  "/usuarios/:id",
  [
    param("id").isInt().withMessage("ID de usuario no válido"),
    body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
    body("correo").isEmail().withMessage("El correo electrónico no es válido"),
    body("contraseña").notEmpty().withMessage("La contraseña es obligatoria"),
  ],
  actualizarUsuario
);

router.delete(
  "/usuarios/:id",
  [param("id").isInt().withMessage("ID de usuario no válido")],
  eliminarUsuario
);

// Rutas para Proyecto
router.post(
  "/Proyectos",
  [body("nombre").notEmpty().withMessage("El nombre es obligatorio")],
  crearProyecto
);

router.get("/Proyectos", obtenerProyectos);

router.get(
  "/Proyectos/:id",
  [param("id").isInt().withMessage("ID de Proyecto no válido")],
  obtenerProyecto
);

router.put(
  "/Proyectos/:id",
  [
    param("id").isInt().withMessage("ID de Proyecto no válido"),
    body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
  ],
  actualizarProyecto
);

router.delete(
  "/Proyectos/:id",
  [param("id").isInt().withMessage("ID de Proyecto no válido")],
  eliminarProyecto
);

// Rutas para Tareas
router.post(
  "/Tareas",
  [body("titulo").notEmpty().withMessage("El título es obligatorio")],
  crearTareas
);

router.get("/Tareas", obtenerTareas);

router.get(
  "/Tareas/:id",
  [param("id").isInt().withMessage("ID de Tareas no válido")],
  obtenerTareas
);

router.put(
  "/Tareas/:id",
  [
    param("id").isInt().withMessage("ID de tareas no válido"),
    body("titulo").notEmpty().withMessage("El título es obligatorio"),
  ],
  actualizarTareas
);

router.delete(
  "/Tareas/:id",
  [param("id").isInt().withMessage("ID de tareas no válido")],
  eliminarTareas
);

module.exports = router; // Exportación del enrutador
