import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "root",
  initialState: {
    level: [],
    extension: [],
    hours: [],
    typeClass: [],
    classes: [],
    staff: [],
    student: [],
    info: null,
    data: null,
    access: null,
    error: null,
  },
  reducers: {
    // *HOURS
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

    // *STAFF
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
    putStaff: (state, action) => {
      state.data = action.payload;
    },
    deleteStaff: (state, action) => {
      state.staff = action.payload.results;
    },

    //*EXTENSION
    getAllExtension: (state, action) => {
      state.extension = action.payload.results;
    },

    //*LEVEL
    getAllLevel: (state, action) => {
      state.level = action.payload.results;
    },

    //*TYPE CLASS
    postTypeClass: (state, action) => {
      state.typeClass = action.payload.results;
    },
    getAllTypeClass: (state, action) => {
      state.typeClass = action.payload.results;
      state.info = action.payload.info;
    },
    getIdTypeClass: (state, action) => {
      state.data = action.payload;
    },
    putTypeClass: (state, action) => {
      state.data = action.payload;
    },
    deleteTypeClass: (state, action) => {
      state.typeClass = action.payload.results;
    },

    //*CLASS
    postClass: (state, action) => {
      state.classes = action.payload.results;
    },
    getAllClass: (state, action) => {
      state.classes = action.payload.results;
      state.info = action.payload.info;
    },
    getIdClass: (state, action) => {
      state.data = action.payload;
    },
    putClass: (state, action) => {
      state.data = action.payload;
    },
    deleteClass: (state, action) => {
      state.classes = action.payload.results;
    },

    clearData: (state, action) => {
      state.data = null;
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
  putStaff,
  deleteStaff,
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
  clearData,
  errorResponse,
} = Slice.actions;
export default Slice.reducer;
