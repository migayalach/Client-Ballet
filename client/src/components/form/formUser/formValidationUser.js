import { emailRegex, numberContact } from "@/utils/regex";

const formValidationUser = (data) => {
  const errors = {};

  if (data.nameUser.length < 3) {
    errors.nameUser = "Ingrese su nombre completo!";
  }

  if (!data.nameUser.length) {
    errors.nameUser = "Ingrese su nombre!";
  }

  if (data.lastNameUser.length < 8) {
    errors.lastNameUser = "Ingrese sus apellidos completos!";
  }

  if (!data.lastNameUser.length) {
    errors.lastNameUser = "Ingrese sus apellidos!";
  }

  if (!emailRegex.test(data.emailUser)) {
    errors.emailUser = "Ingrese un email valido";
  }

  if (!data.emailUser.length) {
    errors.emailUser = "Ingrese un email!";
  }

  if (isNaN(data.carnetUser)) {
    errors.carnetUser = "Ingrese un numero de carnet valido!";
  }

  if (data.carnetUser.length === 0) {
    errors.carnetUser = "Ingrese su numero de carnet!";
  }

  if (!numberContact.test(data.numberPhone)) {
    errors.numberPhone = "Ingrese un numero de contacto!";
  }

  if (data.numberPhone.length < 8) {
    errors.numberPhone = "Ingrese un numero de contacto!";
  }

  if (data.numberPhone.length > 8) {
    errors.numberPhone = "Ingrese un numero de contacto valido!";
  }

  if (!data.idExtension) {
    errors.extension = "Por favor indique la extension del carnet!";
  }

  if (!data.idLevel) {
    errors.level = "Por favor asigne un nivel de acceso!";
  }

  if (!data.dateBirthUser.length) {
    errors.birthdate = "Por favor ingrese su fecha de nacimiento!";
  }

  return errors;
};

export default formValidationUser;
