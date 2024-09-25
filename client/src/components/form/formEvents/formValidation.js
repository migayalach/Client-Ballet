const formValidation = (data) => {
  const errors = {};

  if (data.title.length < 5) {
    errors.title = "Por favor ingrese un titulo!";
  }

  if (!data.title) {
    errors.title = "Por favor ingrese un titulo!";
  }

  if (data.body.length < 25) {
    errors.body = "Por favor ingrese una descripcion!";
  }

  if (!data.body) {
    errors.body = "La descripcion es obligatoria!";
  }

  if (data.dateNews.length < 10) {
    errors.dateNews = "Por favor ingrese una fecha!";
  }

  if (data.dateNews.length > 11) {
    errors.dateNews = "Por favor ingrese una fecha!";
  }

  if (!data.hour.length) {
    errors.hour = "Por favor ingrese una hora!";
  }

  if (!data.urlPicture) {
    errors.urlPicture = "Por favor elija una fotografia!";
  }

  return errors;
};

export default formValidation;
