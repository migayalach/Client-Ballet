export const castingURL = (query) => {
  let str = "";
  let length = Object.keys(query).length;
  let count = 1;

  for (let i in query) {
    if (count < length) {
      str += `${i}=${query[i]}&`;
    } else {
      str += `${i}=${query[i]}`;
    }
    count++;
  }
  return str;
};
