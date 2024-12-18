import { createSlice } from "@reduxjs/toolkit";
import { postAssistanceDate } from "./actions";

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
    params: [],
    qualification: [],
    assistance: [],
    attendance: [],
    info: null,
    data: null,
    access: {},
    state: "",
    action: "",
    message: "",
    aux: {},
    filter: [],
    filterAll: [],
    URL: "",
    error: null,
    success: {},
    list: [],
    contact: [],
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
      // state.data = null;
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

    getIdUserAllClass: (state, action) => {
      state.classes = action.payload.results;
      state.info = action.payload.info;
    },

    //*CLASS STUDENT
    getIdClassStudent: (state, action) => {
      state.student = action.payload.results;
      state.info = action.payload.info;
    },

    postClassStudent: (state, action) => {
      state.student = action.payload.results;
      state.info = action.payload.info;
    },

    //*QUALIFICATION
    postParamsQualification: (state, action) => {
      state.aux = action.payload.results;
      state.info = action.payload.info;
    },

    getListQualification: (state, action) => {
      state.qualification = action.payload.results;
      state.aux = action.payload.params;
    },

    //*PARAMS
    getParamsIdUserAll: (state, action) => {
      state.params = action.payload.results;
      state.info = action.payload.info;
    },

    getIdParam: (state, action) => {
      state.data = action.payload;
    },

    deleteParams: (state, action) => {
      state.info = action.payload.info;
    },

    updateParams: (state, action) => {},

    //*FILTER
    getFilter: (state, action) => {
      state.filter = action.payload.results;
      state.info = action.payload.info;
      state.list = [];
      state.contact = [];
      state.typeClass = [];
      state.hours = [];
      state.user = [];
      state.classes = [];
      state.assistance = [];
      state.params = [];
      state.student = [];
    },

    getUpdateFilter: (state, action) => {
      state.filter = action.payload.results;
      state.info = action.payload.info;
    },

    getFilterAll: (state, action) => {
      state.filterAll = action.payload;
    },

    setFilterAll: (state, action) => {
      state.filterAll = [];
    },

    setFilterState: (state, action) => {
      state[action.payload] = [];
    },

    clearFilter: (state, action) => {
      state.filter = [];
      state.state = "";
    },

    flagState: (state, action) => {
      state.state = action.payload;
    },

    clearState: (state, action) => {
      state.state = "";
    },

    //!LOGIN
    loginUser: (state, action) => {
      state.access = action.payload.access;
      state.state = action.payload.state;
    },

    clearData: (state, action) => {
      state.data = null;
    },

    clearAux: (state, action) => {
      state.aux = {};
      state.state = "";
    },

    clearError: (state, action) => {
      state.error = null;
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

    //!ASSISTANCE
    getClassIdAssistance: (state, action) => {
      state.assistance = action.payload.results;
      state.info = action.payload.info;
    },

    getAssistanceId: (state, action) => {
      state.data = action.payload;
    },

    deleteIdAssistance: (state, action) => {
      state.info = action.payload.infoData.info;
      state.state = action.payload.state;
    },

    postDateAssistance: (state, action) => {
      state.aux = action.payload.assistanceData;
      state.info = action.payload.infoData.info;
      state.state = action.payload.state;
    },

    //!ATTENDANCE
    getIdAttendanceList: (state, action) => {
      state.attendance = action.payload;
    },

    //!LIST
    getAllListEvents: (state, action) => {
      state.list = action.payload.results;
      state.info = action.payload.info;
      state.data = null;
    },

    postListEvent: (state, action) => {
      state.aux = action.payload.listEventData;
      state.info = action.payload.infoData.info;
      state.state = action.payload.state;
    },

    getIdEvent: (state, action) => {
      state.event = action.payload;
    },

    updateEvent: (state, action) => {
      state.event = action.payload.infoData;
      state.state = action.payload.state;
    },

    deleteEvent: (state, action) => {
      state.state = action.payload.state;
    },

    //!CONTACT
    getAllContact: (state, action) => {
      state.contact = action.payload.results;
      state.info = action.payload.info;
    },
    getIdContact: (state, action) => {
      state.data = action.payload;
    },
    postContact: (state, action) => {
      state.success = action.payload;
    },

    //!CLEAR STATES:
    clearEvent: (state, action) => {
      state.list = [];
    },

    clearSend: (state, action) => {
      state.contact = [];
    },

    clearInfo: (state, action) => {
      state.info = null;
    },

    clearTypeClass: (state, action) => {
      state.typeClass = [];
    },

    clearHours: (state, action) => {
      state.hours = [];
    },

    clearUser: (state, action) => {
      state.user = [];
    },

    clearLevel: (state, action) => {
      state.level = [];
    },

    clearExtension: (state, action) => {
      state.extension = [];
    },

    clearClass: (state, action) => {
      state.classes = [];
    },

    clearStudent: (state, action) => {
      state.student = [];
    },

    clearSuccess: (state, action) => {
      state.success = {};
    },

    clearAssistance: (state, action) => {
      state.assistance = [];
    },

    clearAttendance: (state, action) => {
      state.attendance = [];
    },

    clearQualification: (state, action) => {
      state.qualification = [];
    },

    setAction: (state, action) => {
      state.action = action.payload;
    },

    clearAction: (state, action) => {
      state.action = "";
    },

    //*PASSWORD
    passwordChange: (state, action) => {
      state.aux = action.payload;
    },

    getIdUserStudent: (state, action) => {
      state.data = action.payload;
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
} = Slice.actions;
export default Slice.reducer;
