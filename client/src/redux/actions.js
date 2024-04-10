import axios from "axios";
import {
  postHours,
  getAllHours,
  getIdHours,
  deleteIdHours,
  updateHour,
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
      return dispatch(errorResponse(error.message));
    }
  };
};

export const getHoursAll = () => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/hours`)).data;
      return dispatch(getAllHours(data));
    } catch (error) {
      return dispatch(errorResponse(error.message));
    }
  };
};

export const getPageHours = (page) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/hours?page=${page}`)).data;
      return dispatch(getAllHours(data));
    } catch (error) {
      return dispatch(errorResponse(error.message));
    }
  };
};

export const getByIdHours = (idHours) => {
  return async function (dispatch) {
    try {
      const data = (await axios.get(`${URL}/hours/${idHours}`)).data;
      return dispatch(getIdHours(data));
    } catch (error) {
      return dispatch(errorResponse(error.message));
    }
  };
};

export const editIdHours = (info) => {
  return async function (dispatch) {
    try {
      const data = (await axios.put(`${URL}/hours`, info)).data;
      return dispatch(updateHour(data));
    } catch (error) {
      return dispatch(errorResponse(error.message));
    }
  };
};

export const removeIdHours = (idHours) => {
  return async function (dispatch) {
    try {
      const data = (await axios.delete(`${URL}/hours/${idHours}`)).data;
      return dispatch(deleteIdHours(data));
    } catch (error) {
      return dispatch(errorResponse(error.message));
    }
  };
};
