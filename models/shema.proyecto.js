import { checkSchema } from "express-validator";

export const validarProyecto = checkSchema({
  nombre: {
    notEmpty: {
      errorMessage: "El nombre del proyecto es obligatorio",
    },
    isLength: {
      errorMessage: "El nombre del proyecto debe tener al menos 2 caracteres",
      options: { min: 2 },
    },
  },

});
