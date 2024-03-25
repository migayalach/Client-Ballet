import axios from "axios";
import { GET_DANCE_ALL, ERROR } from "./type-actions";
const URL = `http://localhost:3001/ballet`;

export const getDanceAll = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/dance`);
      dispatch({
        type: GET_DANCE_ALL,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};
