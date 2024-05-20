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
    filter: [],
    URL: "",
    error: null,
  },
  reducers: {
    // *HOURS
    postHours: (state, action) => {
      state.aux = action.payload.hoursData;
      state.info = action.payload.infoData.info;
      state.state = action.payload.state;
    },
    getAllHours: (state, action) => {
      state.hours = action.payload.results;
      state.info = action.payload.info;
    },
    getIdHours: (state, action) => {
      state.data = action.payload;
    },
    deleteIdHours: (state, action) => {
      state.info = action.payload.infoData.info;
      state.state = action.payload.state;
    },
    updateHour: (state, action) => {
      // state.data = action.payload;
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
    // TODO SIN USO
    // putUser: (state, action) => {
    //   state.data = action.payload;
    // },

    deleteUser: (state, action) => {
      state.info = action.payload.infoData.info;
      state.state = action.payload.state;
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
      state.aux = action.payload.typeClassData;
      state.info = action.payload.infoData.info;
      state.state = action.payload.state;
    },
    getAllTypeClass: (state, action) => {
      state.typeClass = action.payload.results;
      state.info = action.payload.info;
    },
    getIdTypeClass: (state, action) => {
      state.data = action.payload;
    },
    // TODO SIN USO
    // putTypeClass: (state, action) => {
    //   state.data = action.payload;
    // },
    deleteTypeClass: (state, action) => {
      state.info = action.payload.infoData.info;
      state.state = action.payload.state;
    },

    //*CLASS
    postClass: (state, action) => {
      state.aux = action.payload.classData;
      state.info = action.payload.infoData.info;
      state.state = action.payload.state;
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
      state.info = action.payload.infoData.info;
      state.state = action.payload.state;
    },

    getIdClassStudent: (state, action) => {
      state.student = action.payload.results;
    },

    postClassStudent: (state, action) => {
      state.student = action.payload.results;
    },

    //*FILTER
    getFilter: (state, action) => {
      state.filter = action.payload.results;
      state.info = action.payload.info;
      state.user = [];
    },

    clearFilter: (state, action) => {
      state.filter = [];
      state.state = "";
    },

    flagState: (state, action) => {
      state.state = action.payload;
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
    dataResults: (state, action) => {
      state.aux = {
        elements: action.payload.results.length,
        page: action.payload.info.pages,
      };
    },
    URLFilter: (state, action) => {
      state.URL = action.payload;
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
  getTypeClassPage,
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
  postClassStudent,
  loginUser,
  getFilter,
  flagState,
  clearFilter,
  clearData,
  clearAux,
  errorResponse,
  dataResults,
  URLFilter,
} = Slice.actions;
export default Slice.reducer;
