import { GET_DANCE_ALL, ERROR } from "./type-actions";

const initialState = {
  dance: [],
  error: null,
};

const rootRecuder = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DANCE_ALL:
      return {
        ...state,
        dance: payload,
      };

    case ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootRecuder;
