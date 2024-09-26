import { emailRegex, numberContact } from "@/utils/regex";

const formContactValidate = (data) => {
  const errors = {};

  if (data.nameContact.length < 3) {
    errors.nameContact = "Por favor ingrese su nombre";
  }

  if (!data.nameContact.length) {
    errors.nameContact = "Ingrese su nombre!";
  }

  if (!data.emailContact.length) {
    errors.emailContact = "Por favor ingrese un email";
  }

  if (!emailRegex.test(data.emailContact)) {
    errors.emailContact = "Ingrese un email valido";
  }

  if (!numberContact.test(data.phoneContact)) {
    errors.phoneContact = "Ingrese un numero de contacto valido!";
  }

  if(data.phoneContact.length !== 8 ){
    errors.phoneContact = "Ingrese un numero valido!"
  }

  return errors;
};

export default formContactValidate;
