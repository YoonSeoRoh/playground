import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user";
import contentSlice from "./content";

const rootReducer = combineReducers({
  user: userSlice,
  content: contentSlice,
});

export default rootReducer;
