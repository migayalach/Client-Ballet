import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "root",
  initialState: {
    level: [],
    extension: [],
    hours: [],
    typeClass: [],
    classes: [],
    user: [],
    student: [],
    info: null,
    data: null,
    access: {},
    state: "",
    aux: {},
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

    // *USER
    getAllUser: (state, action) => {
      state.user = action.payload.results;
      state.info = action.payload.info;
    },
    getIdUser: (state, action) => {
      state.data = action.payload;
    },
    postUser: (state, action) => {
      state.aux = action.payload.userData;
      state.info = action.payload.infoData.info;
      state.state = action.payload.state;
    },
    putUser: (state, action) => {
      state.data = action.payload;
    },
    deleteUser: (state, action) => {
      state.info = action.payload.infoData.info;
      state.state = action.payload.state;
      // state.user = action.payload.results;
      // state.aux = action.payload.info;
      // state.cache = action.payload.results
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

    getIdClassStudent: (state, action) => {
      state.student = action.payload.results;
    },

    //!LOGIN
    loginUser: (state, action) => {
      state.access = action.payload;
    },

    clearData: (state, action) => {
      state.data = null;
    },
    clearAux: (state, action) => {
      state.aux = {};
      state.state = "";
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
  postStudent,
  getAllStudent,
  getIdStudent,
  putStudent,
  deleteStudent,
  getIdClassStudent,
  loginUser,
  clearData,
  clearAux,
  errorResponse,
} = Slice.actions;
export default Slice.reducer;
