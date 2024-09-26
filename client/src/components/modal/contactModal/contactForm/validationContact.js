const formValidationSend = (data) => {
  const errors = {};
  if (data.feedback.length < 25) {
    errors.feedback = "Ingrese un texto mas detallado!";
  }

  return errors;
};

export default formValidationSend;
