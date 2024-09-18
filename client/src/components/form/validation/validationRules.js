// export const nameRules = (nameUser) => {
//   const error = [];
//   if (!nameUser || nameUser.length === 0) {
//     error.push({ required: true, message: "Por favor ingrese su nombre!" });
//   }
//   if (nameUser.length < 3) {
//     error.push({
//       min: 3,
//       message: "Por favor ingrese su nombre completo!",
//     });
//   }
//   return error;
// };

// export const lastNameRules = (lastNameUser) => {
//   const error = [];
//   if (!lastNameUser || lastNameUser.length === 0) {
//     error.push({ required: true, message: "Por favor ingrese sus apellidos!" });
//   }
//   if (lastNameUser.length < 10) {
//     error.push({
//       min: 10,
//       message: "Por favor ingrese sus apellidos completos!",
//     });
//   }
//   return error;
// };

// export const emailRules = (emailUser) => {
//   console.log(":DDD");
  
//   const error = [];
//   if (!emailUser || emailUser.length === 0) {
//     error.push({
//       required: true,
//       message: "Por favor introduzca un correo electronico!",
//     });
//   }
//   return error;
//   // [
//   //   {
//   //     required: true,
//   //     message: "Por favor introduzca un correo electronico!",
//   //   },
//   //   {
//   //     pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//   //     message: "El correo electrónico no tiene un formato válido!",
//   //   },
//   // ];
// };

// // export const passwordRules = [
// //   {
// //     required: true,
// //     message: "Por favor introduzca su contraseña!",
// //   },
// //   {
// //     min: 8,
// //     message: "La contraseña debe tener al menos 8 caracteres!",
// //   },
// //   // TODO ARREGLAR CONTRASEÑA FALTA UNA MINUSCULA
// //   // {
// //   //   pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/,
// //   //   message:
// //   //     "La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un número!",
// //   // },
// // ];

// // export const carnetRules = [
// //   { required: true, message: "Por favor ingrese su numero de carnet!" },
// // ];

// // export const idRules = [];
