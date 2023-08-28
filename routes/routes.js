// routes.mjs

import { Router } from "express";
import ctrlUsuarios from "../controller/user.controller.js";
import ctrlProyectos from "../controller/proyecto.controller.js";
import ctrlTareas from "../controller/tareas.controller.js";
import { validateSchema } from "../middleware/validationSchema.js";
import { validar } from "../models/schema.js";
import { validarProyecto } from "../models/shema.proyecto.js";
import { validarTarea } from "../models/schema.tareas.js";
const router = Router();

// ... Rutas para Usuario ...
router.post(
  "/crearusuario",
  validar,
  validateSchema,
  ctrlUsuarios.crearUsuario
);

router.post(
  "/crearproyecto",
  validarProyecto,
  validateSchema,
  ctrlProyectos.crearProyecto
);

router.post("/creartarea", validarTarea, validateSchema, ctrlTareas.crearTarea);
// Exportación del enrutador
export default router;
