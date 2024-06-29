const keyParse = (data) => data.trim().replace(/\s+/g, "");

const qualificationRoute = (qualification) => {
  let formattedData = {};
  qualification.forEach(({ item, calification }) => {
    formattedData[keyParse(item)] = calification;
  });
  return formattedData;
};

const calculeNote = (quaList) => {
  let sum = 0;
  for (let i = 0; i < quaList.length; i++) {
    sum += Number(quaList[i].calification);
  }
  return sum;
};

export { keyParse, qualificationRoute, calculeNote };
