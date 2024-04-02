import { configureStore } from "@reduxjs/toolkit";
import root from "./slice";

export default configureStore({
  reducer: {
    root,
  },
});
