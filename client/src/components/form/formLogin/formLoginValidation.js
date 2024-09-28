import {
  emailRegex,
  passwordRegexMay_AZ,
  passwordRegexMin_az,
  passwordRegexDigits,
  passwordRegexSpecialCaracter,
  passwordRegexLength,
} from "@/utils/regex";

const formLoginValidation = (data) => {
  const errors = {};

  if (!data.email.length) {
    errors.email = "Ingrese su email!";
  }

  if (!emailRegex.test(data.email)) {
    errors.email = "Ingrese un email valido!";
  }

  if (!data.password) {
    errors.password = "La contraseña no puede estar vacía";
  } else {
    if (!passwordRegexMay_AZ.test(data.password)) {
      errors.password = "Debe contener al menos una letra mayúscula (A-Z)";
    }

    if (!passwordRegexMin_az.test(data.password)) {
      errors.password = "Debe contener al menos una letra minúscula (a-z)";
    }

    if (!passwordRegexDigits.test(data.password)) {
      errors.password = "Debe contener al menos un dígito (0-9)";
    }

    if (!passwordRegexSpecialCaracter.test(data.password)) {
      errors.password =
        "Debe contener al menos uno de los siguientes caracteres especiales: ., @, #, $, %, ^, &, +, =, !, _ ";
    }

    if (!passwordRegexLength.test(data.password)) {
      errors.password =
        "La longitud mínima de la contraseña debe ser de 8 caracteres.";
    }
  }
  return errors;
};

export default formLoginValidation;
