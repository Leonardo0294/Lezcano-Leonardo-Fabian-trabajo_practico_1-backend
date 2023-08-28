// routes.mjs

import express from "express";
import { body, param } from "express-validator";
import ctrlUsuarios from "../controller/user.controller.js"; // Asegúrate de ajustar las rutas
import ctrlProyectos from "../controller/proyecto.controller.js"; // Asegúrate de ajustar las rutas
import ctrlTareas from "../controller/tareas.controller.js"; // Asegúrate de ajustar las rutas

const router = express.Router();
// ... Rutas para Usuario ...

// ... Rutas para Proyecto ...

// ... Rutas para Tareas ...

export default router; // Exportación del enrutador
