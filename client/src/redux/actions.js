import axios from "axios";
import {
  postHours,
  getAllHours,
  getIdHours,
  deleteIdHours,
  updateHour,
  getAllUser,
  getIdUser,
  postUser,
  putUser,
  deleteUser,
  getAllExtension,
  getAllLevel,
  postTypeClass,
  getAllTypeClass,
  getIdTypeClass,
  putTypeClass,
  deleteTypeClass,
  postClass,
  getAllClass,
  getIdClass,
  putClass,
  deleteClass,
  getIdClassStudent,
  postClassStudent,
  loginUser,
  getFilter,
  getFilterAll,
  setFilterAll,
  setFilterState,
  flagState,
  clearFilter,
  clearData,
  clearAux,
  errorResponse,
  dataResults,
  URLFilter,
  postParamsQualification,
} from "./slice";
const URL = "http://localhost:3001/academy";

// ACCIONES A EJECUTARSE

//!HOURS
export const createHours = (infoData) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/hours`, infoData)).data;
      return dispatch(postHours(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getHoursAll = () => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/hours`)).data;
      return dispatch(getAllHours(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getPageHours = (page) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/hours?page=${page}`)).data;
      return dispatch(getAllHours(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getByIdHours = (idHours) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/hours/${idHours}`)).data;
      return dispatch(getIdHours(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const editIdHours = (info) => {
  return async function (dispatch) {
    try {
      await axios.put(`${URL}/hours`, info);
      return dispatch(flagState("edit"));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const removeIdHours = (idHours) => {
  return async function (dispatch) {
    try {
      const data = (await axios.delete(`${URL}/hours/${idHours}`)).data;
      return dispatch(deleteIdHours(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//!USER
export const getUserAll = () => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/user`)).data;
      return dispatch(getAllUser(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getPageUser = (page) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/user?page=${page}`)).data;
      return dispatch(getAllUser(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getByIdUser = (idUser) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/user/${idUser}`)).data;
      return dispatch(getIdUser(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const createUser = (infoData) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/user`, infoData)).data;
      return dispatch(postUser(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const editUser = (infoData) => {
  return async function (dispatch) {
    try {
      await axios.put(`${URL}/user`, infoData);
      return dispatch(flagState("edit"));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const removeUser = (infoData) => {
  return async function (dispatch) {
    try {
      const data = (await axios.delete(`${URL}/user/${infoData}`)).data;
      return dispatch(deleteUser(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//!EXTENSION
export const getExtensionAll = () => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/extension`)).data;
      return dispatch(getAllExtension(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//!LEVEL
export const getLevelAll = () => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/level`)).data;
      return dispatch(getAllLevel(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//!TYPE-CLASS
export const createTypeClass = (infoData) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/typeClass`, infoData)).data;
      return dispatch(postTypeClass(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getTypeClassAll = () => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/typeClass`)).data;
      return dispatch(getAllTypeClass(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getByIdTypeHour = (idTypeClass) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/typeClass/${idTypeClass}`)).data;
      return dispatch(getIdTypeClass(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const editTypeHour = (infoData) => {
  return async function (dispatch) {
    try {
      await axios.put(`${URL}/typeClass`, infoData);
      return dispatch(flagState("edit"));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const removeTypeClass = (idTypeClass) => {
  return async function (dispatch) {
    try {
      const data = (await axios.delete(`${URL}/typeClass/${idTypeClass}`)).data;
      return dispatch(deleteTypeClass(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getPageTypeClass = (page) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/typeClass?page=${page}`)).data;
      return dispatch(getAllTypeClass(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//!CLASS
export const getClassAll = () => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/class`)).data;
      return dispatch(getAllClass(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const createClass = (infoData) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/class`, infoData)).data;
      return dispatch(postClass(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getByIdClass = (idClass) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/class/${idClass}`)).data;
      return dispatch(getIdClass(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const editClass = (infoData) => {
  return async function (dispatch) {
    try {
      await axios.put(`${URL}/class`, infoData);
      return dispatch(flagState("edit"));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const removeClass = (idClass) => {
  return async function (dispatch) {
    try {
      const data = (await axios.delete(`${URL}/class/${idClass}`)).data;
      return dispatch(deleteClass(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//!QUALIFICATION
export const createParamsQualification = (infoData) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/params`, infoData)).data;
      return dispatch(postParamsQualification(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getPageClass = (page) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/class?page=${page}`)).data;
      return dispatch(getAllClass(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getIdAllClassStudent = (idClass) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/classStudent/${idClass}`)).data;
      return dispatch(getIdClassStudent(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const createClassStudent = (infoData) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/classStudent`, infoData)).data;
      return dispatch(postClassStudent(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const userLogin = (infoData) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/login`, infoData)).data;
      return dispatch(loginUser(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const filter = (infoData, valueState) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/filter?${infoData}`)).data;
      dispatch(setFilterState(valueState));
      return dispatch(getFilter(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const filterAll = (infoData) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/filter?${infoData}`)).data;
      return dispatch(getFilterAll(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const clearFilterAll = () => {
  return function (dispatch) {
    try {
      return dispatch(setFilterAll());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const filterClear = () => {
  return function (dispatch) {
    try {
      return dispatch(clearFilter());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const removeData = () => {
  return function (dispatch) {
    try {
      return dispatch(clearData());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const removeAux = () => {
  return function (dispatch) {
    try {
      return dispatch(clearAux());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const currentPage = (route, page) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/${route}?page=${page}`)).data;
      return dispatch(dataResults(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const stateFlag = (flag) => {
  return function (dispatch) {
    try {
      return dispatch(flagState(flag));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const filterURL = (URL) => {
  return function (dispatch) {
    try {
      return dispatch(URLFilter(URL));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};
