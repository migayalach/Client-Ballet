export const emailRules = [
  {
    required: true,
    message: "Por favor introduzca un correo electronico!",
  },
  {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "El correo electrónico no tiene un formato válido!",
  },
];

export const passwordRules = [
  {
    required: true,
    message: "Por favor introduzca su contraseña!",
  },
  {
    min: 8,
    message: "La contraseña debe tener al menos 8 caracteres!",
  },
  // TODO ARREGLAR CONTRASEÑA FALTA UNA MINUSCULA
  // {
  //   pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  //   message:
  //     "La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número!",
  // },
];

export const nameRules = [
  { required: true, message: "Por favor ingrese su nombre!" },
  {
    min: 0,
    message: "Por favor ingrese su nombre completo!",
  },
];

export const lastNameRules = [
  { required: true, message: "Por favor ingrese sus apellidos!" },
  {
    min: 0,
    message: "Por favor ingrese sus apellidos completos!",
  },
];

export const carnetRules = [
  { required: true, message: "Por favor ingrese su numero de carnet!" },
];

export const idRules = [];
