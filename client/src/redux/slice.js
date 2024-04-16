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
    clearData: (state, action) => {
      state.data = null;
    },
    getAllStaff: (state, action) => {
      state.staff = action.payload.results;
      state.info = action.payload.info;
    },
    getIdStaff: (state, action) => {
      state.data = action.payload;
    },
    postStaff: (state, action) => {
      state.staff = action.payload.results;
    },
    getAllExtension: (state, action) => {
      state.extension = action.payload.results;
    },
    getAllLevel: (state, action) => {
      state.level = action.payload.results;
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
  updateHour,
  getAllStaff,
  getIdStaff,
  postStaff,
  getAllExtension,
  getAllLevel,
  clearData,
  errorResponse,
} = Slice.actions;
export default Slice.reducer;
