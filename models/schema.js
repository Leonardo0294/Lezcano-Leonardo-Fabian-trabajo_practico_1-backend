// Rutas para Usuario
import { checkSchema } from "express-validator";

export const validar = checkSchema({
  nombre: {
    notEmpty: {
      errorMessage: "El nombre es obligatorio",
    },
    isLength: {
      errorMessage: "El nombre tiene que tener al menos 2 caracteres",
      options: { min: 2 },
    },
  },
  apellido: {
    notEmpty: {
      errorMessage: "El apellido es obligatorio",
    },
    isLength: {
      errorMessage: "El apellido tiene que tener al menos 2 caracteres",
      options: { min: 2 },
    },
  },
  email: {
    notEmpty: {
      errorMessage: "El correo electrónico es obligatorio",
    },
    isEmail: {
      errorMessage: "El correo electrónico no es válido",
    },
  },
  telefono: {
    notEmpty: {
      errorMessage: "El teléfono es obligatorio",
    },
    isNumeric: {
      errorMessage: "Ingrese un valor numérico para el teléfono",
    },
  },
});
