import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "root",
  initialState: {
    staff: [],
    student: [],
    access: null,
  },
  reducers: {
    guardarNombre: (state, action) => {
      state.nombre = action.payload;
    },
  },
});

export const { guardarNombre } = Slice.actions;
export default Slice.reducer;
