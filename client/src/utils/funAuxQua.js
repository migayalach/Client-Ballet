const keyParse = (data) => data.trim().replace(/\s+/g, "");

function qualificationRoute(qualification) {
  let formattedData = {};
  qualification?.forEach(({ item, calification }) => {
    formattedData[keyParse(item)] = calification;
  });
  return formattedData;
}

function calculeNote(quaList) {
  let sum = 0;
  for (let i = 0; i < quaList?.length; i++) {
    sum += Number(quaList[i].calification);
  }
  return sum;
}

function parseQualification(qualification) {
  const originData = [];
  for (let i = 0; i < qualification?.length; i++) {
    originData.push({
      key: i,
      number: i + 1,
      idParams: qualification[i]?.idParams,
      idUser: qualification[i]?.idUser,
      nameUser: qualification[i]?.nameUser,
      lastNameUser: qualification[i]?.lastNameUser,
      carnetUser: qualification[i]?.carnetUser,
      department: qualification[i]?.department,
      ...qualificationRoute(qualification[i]?.qualification),
      observation: qualification[i]?.observation,
      note: qualification[i]?.note,
    });
  }
  return originData;
}

function qualificatioNote(data) {
  let sum = 0;
  for (let i = 0; i < data?.length; i++) {
    sum += parseInt(data[i].calification);
  }
  return Math.ceil((sum + 1) / 2);
}

export {
  keyParse,
  qualificationRoute,
  calculeNote,
  parseQualification,
  qualificatioNote,
};
