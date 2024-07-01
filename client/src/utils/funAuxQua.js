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

function hasPropertyQua(key, arrayKey) {
  let string = "";
  arrayKey.forEach(({ item }) => {
    const data = keyParse(item);
    if (data === key) {
      string = item;
    }
  });
  return string;
}

function castingQualification(data, quaParams, paramsOriginal) {
  const qualification = [];
  for (let j = 0; j < quaParams.length; j++) {
    if (data.hasOwnProperty([quaParams[j]])) {
      qualification.push({
        [hasPropertyQua(quaParams[j], paramsOriginal)]: data[quaParams[j]],
      });
    }
  }
  return {
    idUser: data.idUser,
    qualification,
    observation: data.observation,
    note: data.note,
  };
}

export {
  keyParse,
  qualificationRoute,
  calculeNote,
  parseQualification,
  qualificatioNote,
  castingQualification,
};
