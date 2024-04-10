import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "root",
  initialState: {
    level: [],
    extension: [],
    hours: [],
    typeClass: [],
    staff: [],
    student: [],
    info: null,
    data: null,
    access: null,
    error: null,
  },
  reducers: {
    postHours: (state, action) => {
      state.hours = action.payload.results;
    },
    getAllHours: (state, action) => {
      state.hours = action.payload.results;
      state.info = action.payload.info;
    },
    getIdHours: (state, action) => {
      state.data = action.payload;
    },
    deleteIdHours: (state, action) => {
      state.hours = action.payload.results;
    },
    updateHour: (state, action) => {
      state.data = action.payload;
    },
    errorResponse: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  postHours,
  getAllHours,
  getIdHours,
  deleteIdHours,
  errorResponse,
  updateHour,
} = Slice.actions;
export default Slice.reducer;
