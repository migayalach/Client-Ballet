import {
  passwordRegexMay_AZ,
  passwordRegexMin_az,
  passwordRegexDigits,
  passwordRegexSpecialCaracter,
  passwordRegexLength,
} from "@/utils/regex";

const formLoginValidation = (data) => {
  const errors = {};

  if (!passwordRegexMay_AZ.test(data.oldPassword)) {
    errors.oldPassword = "Debe contener al menos una letra mayúscula (A-Z)";
  }

  if (!passwordRegexMin_az.test(data.oldPassword)) {
    errors.oldPassword = "Debe contener al menos una letra minúscula (a-z)";
  }

  if (!passwordRegexDigits.test(data.oldPassword)) {
    errors.oldPassword = "Debe contener al menos un dígito (0-9)";
  }

  if (!passwordRegexSpecialCaracter.test(data.oldPassword)) {
    errors.oldPassword =
      "Debe contener al menos uno de los siguientes caracteres especiales: ., @, #, $, %, ^, &, +, =, !, _ ";
  }

  if (!passwordRegexLength.test(data.oldPassword)) {
    errors.oldPassword =
      "La longitud mínima de la contraseña debe ser de 8 caracteres.";
  }

  if (!data.oldPassword.length) {
    errors.oldPassword = "La contraseña no puede estar vacía";
  }

  if (!passwordRegexMay_AZ.test(data.newPassword)) {
    errors.newPassword = "Debe contener al menos una letra mayúscula (A-Z)";
  }

  if (!passwordRegexMin_az.test(data.newPassword)) {
    errors.newPassword = "Debe contener al menos una letra minúscula (a-z)";
  }

  if (!passwordRegexDigits.test(data.newPassword)) {
    errors.newPassword = "Debe contener al menos un dígito (0-9)";
  }

  if (!passwordRegexSpecialCaracter.test(data.newPassword)) {
    errors.newPassword =
      "Debe contener al menos uno de los siguientes caracteres especiales: ., @, #, $, %, ^, &, +, =, !, _ ";
  }

  if (!passwordRegexLength.test(data.newPassword)) {
    errors.newPassword =
      "La longitud mínima de la contraseña debe ser de 8 caracteres.";
  }

  if (!data.newPassword.length) {
    errors.newPassword = "La contraseña no puede estar vacía";
  }

  if (!passwordRegexMay_AZ.test(data.repeatNewPassword)) {
    errors.repeatNewPassword =
      "Debe contener al menos una letra mayúscula (A-Z)";
  }

  if (!passwordRegexMin_az.test(data.repeatNewPassword)) {
    errors.repeatNewPassword =
      "Debe contener al menos una letra minúscula (a-z)";
  }

  if (!passwordRegexDigits.test(data.repeatNewPassword)) {
    errors.repeatNewPassword = "Debe contener al menos un dígito (0-9)";
  }

  if (!passwordRegexSpecialCaracter.test(data.repeatNewPassword)) {
    errors.repeatNewPassword =
      "Debe contener al menos uno de los siguientes caracteres especiales: ., @, #, $, %, ^, &, +, =, !, _ ";
  }

  if (!passwordRegexLength.test(data.repeatNewPassword)) {
    errors.repeatNewPassword =
      "La longitud mínima de la contraseña debe ser de 8 caracteres.";
  }

  if (!data.repeatNewPassword.length) {
    errors.repeatNewPassword = "La contraseña no puede estar vacía";
  }

  return errors;
};

export default formLoginValidation;
