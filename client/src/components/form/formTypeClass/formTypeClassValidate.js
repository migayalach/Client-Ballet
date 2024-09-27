const formTypeClassValidate = (data) => {
  const errors = {};

  if (!data.nameClass.length) {
    errors.nameClass = "Ingrese un nombre";
  }

  if (data.nameClass.length < 4) {
    errors.nameClass = "Por favor ingrese un nombre";
  }

  return errors;
};

export default formTypeClassValidate;
