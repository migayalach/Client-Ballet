import { async } from "@firebase/util";
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
  getParamsIdUserAll,
  getIdUserAllClass,
  getListQualification,
  getClassIdAssistance,
  deleteIdAssistance,
  postDateAssistance,
  getAssistanceId,
  getIdAttendanceList,
  getAllListEvents,
  getAllContact,
  getIdContact,
  postContact,
  clearError,
  postListEvent,
  getIdEvent,
  updateEvent,
  clearState,
  deleteEvent,
  clearEvent,
  clearSend,
  clearInfo,
  clearTypeClass,
  clearHours,
  clearUser,
  clearLevel,
  clearExtension,
  passwordChange,
  clearClass,
  clearStudent,
  getAllStudent,
  clearSuccess,
  clearAssistance,
  clearAttendance,
  deleteParams,
  getIdParam,
  updateParams,
  clearQualification,
  getUpdateFilter,
  setAction,
  clearAction,
  getIdUserStudent,
} from "./slice";
const URL = "http://localhost:3001/academy";

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
      return dispatch(flagState("edit-hour"));
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
      const data = (await axios.put(`${URL}/user`, infoData)).data;
      dispatch(flagState("editUser"));
      return dispatch(getIdUser(data));
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

//!PASSWORD
export const changePassword = (info) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/change`, info)).data;
      return dispatch(passwordChange(data));
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
      return dispatch(flagState("edit-typeClass"));
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
export const getClassAll = (idUser) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/class?idUser=${idUser}`)).data;
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
      return dispatch(flagState("edit-class"));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const removeClass = (idUser, idClass) => {
  return async function (dispatch) {
    try {
      const data = (await axios.delete(`${URL}/class/${idUser}/${idClass}`))
        .data;
      return dispatch(deleteClass(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getPageClass = (idUser, page) => {
  return async function (dispatch) {
    try {
      const data = (
        await axios.get(`${URL}/class?idUser=${idUser}&page=${page}`)
      ).data;
      return dispatch(getAllClass(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//!CLASS STUDENT
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
      dispatch(flagState("registration-success"));
      return dispatch(postClassStudent(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getPageClassStudent = (idClass, page) => {
  return async function (dispatch) {
    try {
      const data = (
        await axios.get(`${URL}/classStudent?idClass=${idClass}&page=${page}`)
      ).data;
      return dispatch(getIdClassStudent(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//!LOGIN
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

//!FILTROS
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

export const filterAllData = (search) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/allData?dataRequest=${search}`))
        .data;
      return dispatch(getFilterAll(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const filterAllDataIds = (idClass, search) => {
  return async function (dispatch) {
    try {
      const data = (
        await axios.get(
          `${URL}/allData?dataRequest=${search}&idClass=${idClass}`
        )
      ).data;
      return dispatch(getFilterAll(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const filterAllCourseIdUser = (idUser, search) => {
  return async function (dispatch) {
    try {
      const data = (
        await axios.get(`${URL}/allData?dataRequest=${search}&idUser=${idUser}`)
      ).data;
      return dispatch(getFilterAll(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const filterAll = (infoData) => {
  return async function (dispatch) {
    try {
      const data =
        typeof infoData === "string"
          ? (await axios.get(`${URL}/filter?${infoData}`)).data
          : (await axios.get(`${URL}/filter/${infoData}`)).data;
      return dispatch(getFilterAll(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const filterInfo = (flag, infoData) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/filter?flag=${flag}&${infoData}`))
        .data;
      return dispatch(getFilter(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const filterSet = ({ search, data, page }) => {
  return async function (dispatch) {
    try {
      const response = (
        await axios.get(
          `${URL}/filter?search=${search}&data=${data}&page=${page}`
        )
      ).data;
      dispatch(URLFilter(`${URL}/filter?search=${search}&data=${data}&page=`));
      dispatch(stateFlag("filter-request"));
      return dispatch(getFilter(response));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const filterPrevNext = (info) => {
  return async function (dispatch) {
    try {
      const response = (await axios.get(info)).data;
      return dispatch(getUpdateFilter(response));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const filterActions = (info) => {
  return async function (dispatch) {
    try {
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//!CLEAR FILTER
export const filterClear = () => {
  return function (dispatch) {
    try {
      return dispatch(clearFilter());
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

export const clearFilterAll = () => {
  return function (dispatch) {
    try {
      return dispatch(setFilterAll());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//!REMOVE STATE
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

export const removeError = () => {
  return function (dispatch) {
    try {
      return dispatch(clearError());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const stateClear = () => {
  return function (dispatch) {
    try {
      return dispatch(clearState());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const successClear = () => {
  return function (dispatch) {
    try {
      return dispatch(clearSuccess());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//!AUX STATE
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

//*PARAMS
export const createParamsQualification = (infoData) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/params`, infoData)).data;
      dispatch(flagState("create-param"));
      return dispatch(postParamsQualification(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getParamsAllIdUser = (idUser) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/params/${idUser}`)).data;
      return dispatch(getParamsIdUserAll(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getPageParams = (idClass, page) => {
  return async function (dispatch) {
    try {
      const data = (
        await axios.get(`${URL}/params?idClass=${idClass}&page=${page}`)
      ).data;
      return dispatch(getParamsIdUserAll(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getParmsId = (idClass, idParams) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/params/${idClass}/${idParams}`))
        .data;
      return dispatch(getIdParam(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const editParams = (infoData) => {
  return async function (dispatch) {
    try {
      const data = (await axios.put(`${URL}/params`, infoData)).data;
      return dispatch(flagState("edit-param"));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const removeParams = (idCLass, idParams) => {
  return async function (dispatch) {
    try {
      const data = (await axios.delete(`${URL}/params/${idCLass}/${idParams}`))
        .data;
      dispatch(flagState("delete-param"));
      return dispatch(deleteParams(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//*QUALIFICATION
export const getQualificationAll = (idParams) => {
  return async function (dispatch) {
    try {
      const data = (
        await axios.get(
          `${URL}/qualification?idParams=${idParams}&flag=frontend`
        )
      ).data;
      return dispatch(getListQualification(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const postQualification = (infoData) => {
  return async function (dispatch) {
    try {
      await axios.post(`${URL}/qualification`, infoData);
      return dispatch(flagState("create-qualification"));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//!ASSISTANCE
export const getAssistanceClassId = (idClass) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/assistance/${idClass}`)).data;
      return dispatch(getClassIdAssistance(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getIdAssistance = (idClass, idAssistance) => {
  return async function (dispatch) {
    try {
      const data = (
        await axios.get(
          `${URL}/assistance?idClass=${idClass}&idAssistance=${idAssistance}`
        )
      ).data;
      return dispatch(getAssistanceId(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getPageAssistance = (idClass, page) => {
  return async function (dispatch) {
    try {
      const data = (
        await axios.get(`${URL}/assistance?idClass=${idClass}&page=${page}`)
      ).data;
      return dispatch(getClassIdAssistance(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const postAssistanceDate = (info) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/assistance`, info)).data;
      return dispatch(postDateAssistance(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const deleteAssistanceDate = (idClass, idAssistance) => {
  return async function (dispatch) {
    try {
      const data = (
        await axios.delete(`${URL}/assistance/${idClass}/${idAssistance}`)
      ).data;
      return dispatch(deleteIdAssistance(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const updateAssistanceDate = (infoData) => {};

//!ATTENDANCE
export const getListIdAttendance = (idAttendance) => {
  return async function (dispatch) {
    try {
      const data = (
        await axios.get(`${URL}/attendance/${idAttendance}/frontend`)
      ).data;
      return dispatch(getIdAttendanceList(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const postListAttendance = (info) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/attendance`, info)).data;
      return dispatch(stateFlag(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//!LIST EVENTS
export const getListEventsAll = () => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/listEvents`)).data;
      return dispatch(getAllListEvents(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const addListEvent = (info) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/listEvents`, info)).data;
      return dispatch(postListEvent(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getEventId = (idEvent) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/listEvents/${idEvent}`)).data;
      return dispatch(getIdEvent(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const editEvent = (info) => {
  return async function (dispatch) {
    try {
      const data = (await axios.put(`${URL}/listEvents`, info)).data;
      return dispatch(updateEvent(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getPageEvent = (page) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/listEvents?page=${page}`)).data;
      return dispatch(getAllListEvents(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const removeEvent = (idListEvent) => {
  return async function (dispatch) {
    try {
      const data = (await axios.delete(`${URL}/listEvents/${idListEvent}`))
        .data;
      return dispatch(deleteEvent(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//!CONTACT
export const getContactAll = () => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/contact`)).data;
      return dispatch(getAllContact(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getContactId = (idContact) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/contact/${idContact}`)).data;
      return dispatch(getIdContact(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const editContact = (info) => {
  return async function (dispatch) {
    try {
      await axios.put(`${URL}/contact`, info);
      return dispatch(flagState("edit"));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getPageContact = (page) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/contact?page=${page}`)).data;
      return dispatch(getAllContact(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const createContact = (info) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/contact`, info)).data;
      return dispatch(postContact(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

//!CLEAR STATES
export const listClear = () => {
  return async function (dispatch) {
    try {
      return dispatch(clearEvent());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const sentClear = () => {
  return async function (dispatch) {
    try {
      return dispatch(clearSend());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const infoClear = () => {
  return async function (dispatch) {
    try {
      return dispatch(clearInfo());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const typeClassClear = () => {
  return async function (dispatch) {
    try {
      return dispatch(clearTypeClass());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const hoursClear = () => {
  return async function (dispatch) {
    try {
      return dispatch(clearHours());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const userClear = () => {
  return async function (dispatch) {
    try {
      return dispatch(clearUser());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const levelClear = () => {
  return async function (dispatch) {
    try {
      return dispatch(clearLevel());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const extensionClear = () => {
  return async function (dispatch) {
    try {
      return dispatch(clearExtension());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const classClear = () => {
  return async function (dispatch) {
    try {
      return dispatch(clearClass());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const studentClear = () => {
  return async function (dispatch) {
    try {
      return dispatch(clearStudent());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const assitanceClear = () => {
  return async function (dispatch) {
    try {
      return dispatch(clearAssistance());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const attendanceClear = () => {
  return async function (dispatch) {
    try {
      return dispatch(clearAttendance());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const qualificationClear = () => {
  return async function (dispatch) {
    try {
      return dispatch(clearQualification());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const actionSet = (info) => {
  return async function (dispatch) {
    try {
      return dispatch(setAction(info));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const actionClear = () => {
  return async function (dispatch) {
    try {
      return dispatch(clearAction());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getStudentIdUser = (idClass, idUser) => {
  return async function (dispatch) {
    try {
      const data = (
        await axios.get(`${URL}/classStudent/${idClass}/${idUser}`)
      ).data;
      return dispatch(getIdUserStudent(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

// DOWNLOAD
export const dataDownload = (
  idUser,
  idClass,
  idAssistance,
  option,
  idParams
) => {
  return async function (dispatch) {
    try {
      let response = null;
      if (option === "listQualification") {
        response = await axios.get(
          `${URL}/download?idUser=${idUser}&idClass=${idClass}&idParams=${idParams}&option=${option}`,
          {
            responseType: "blob", // Esto indica que la respuesta es un archivo
          }
        );
      } else {
        response = await axios.get(
          `${URL}/download?idUser=${idUser}&idClass=${idClass}&idAssistance=${idAssistance}&option=${option}`,
          {
            responseType: "blob", // Esto indica que la respuesta es un archivo
          }
        );
      }

      // Crear un enlace para la descarga del archivo
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;

      // Asignar nombre del archivo según la opción
      link.setAttribute(
        "download",
        option === "listStudents"
          ? "lista-estudiantes.pdf"
          : option === "listAssitance"
          ? "lista-asistencia.xlsx"
          : "lista-calificaciones.xlsx"
      );

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return;
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};
