import axios from "axios";
import {
  postHours,
  getAllHours,
  getIdHours,
  deleteIdHours,
  updateHour,
  getAllStaff,
  getIdStaff,
  postStaff,
  getAllExtension,
  getAllLevel,
  clearData,
  errorResponse,
} from "./slice";
const URL = "http://localhost:3001/academy";

// ACCIONES A EJECUTARSE
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
      const data = (await axios.put(`${URL}/hours`, info)).data;
      await dispatch(getHoursAll());
      return dispatch(updateHour(data));
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

export const getStaffAll = () => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/staff`)).data;
      return dispatch(getAllStaff(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const getByIdStaff = (idStaff) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/staff/${idStaff}`)).data;
      return dispatch(getIdStaff(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

export const createStaff = (infoData) => {
  return async function (dispatch) {
    try {
      const data = (await axios.post(`${URL}/staff`, infoData)).data;
      return dispatch(postStaff(data));
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};

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

export const removeData = () => {
  return function (dispatch) {
    try {
      return dispatch(clearData());
    } catch (error) {
      return dispatch(errorResponse(error.response.data));
    }
  };
};
