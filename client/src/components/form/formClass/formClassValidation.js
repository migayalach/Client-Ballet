const formClassValidate = (data) => {  
  const errors = {};
  if (data.idUser === 0) {
    errors.user = "Por favor asigne un profesor a esta clase!";
  }
  if (data.idTypeClass === 0) {
    errors.typeClass = "Por favor asigne una danza para la clase!";
  }
  if (data.idHours === 0) {
    errors.hours = "Por favor asigne un horario a la clase";
  }
  
  if (data.parallel.length < 3) {
    errors.parallel = "Por favor ingrese un nombre para el paralelo!";
  }

  return errors;
};

export default formClassValidate;
