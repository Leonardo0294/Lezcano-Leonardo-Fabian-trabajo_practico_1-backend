import { checkSchema } from "express-validator";

export const validarTarea = checkSchema({
  nombre: {
    notEmpty: {
      errorMessage: "El nombre de la tarea es obligatorio",
    },
    isLength: {
      errorMessage: "El nombre de la tarea debe tener al menos 2 caracteres",
      options: { min: 2 },
    },
  },
  descripcion: {
    notEmpty: {
      errorMessage: "La descripción de la tarea es obligatoria",
    },
    isLength: {
      errorMessage:
        "La descripción de la tarea debe tener al menos 5 caracteres",
      options: { min: 5 },
    },
  },
  // Agrega otras validaciones específicas para la entidad de tarea
});
