import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice.js";
import themeReducer from "../theme/themeSlice.js";
export const store = configureStore({
  reducer: {
    todos: todosReducer,
    theme: themeReducer  ,
  },
});
export default store;