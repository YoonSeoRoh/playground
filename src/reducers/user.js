import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  signupThunk,
  getMyCommentsThunk,
  getMyContentsThunk,
} from "../actions/user";

const initialState = {
  loginData: null,
  loginLoading: false,
  loginDone: false,
  signupData: null,
  signupLoading: false,
  signupDone: false,
  commentData: [],
  commentLoading: false,
  commentDone: false,
  contentData: [],
  contentLoading: false,
  contentDone: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.loginDone = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.loginLoading = true;
        state.loginDone = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.loginDone = true;
        state.loginData = action.payload;
      })
      .addCase(signupThunk.pending, (state, action) => {
        state.signupLoading = true;
        state.signupDone = false;
      })
      .addCase(signupThunk.fulfilled, (state, action) => {
        state.signupLoading = false;
        state.signupDone = true;
        state.signupData = action.payload;
      })
      .addCase(getMyCommentsThunk.pending, (state, action) => {
        state.commentLoading = true;
        state.commentDone = false;
      })
      .addCase(getMyCommentsThunk.fulfilled, (state, action) => {
        state.commentLoading = false;
        state.commentDone = true;
        state.commentData = action.payload;
      })
      .addCase(getMyContentsThunk.pending, (state, action) => {
        state.contentLoading = true;
        state.contentDone = false;
      })
      .addCase(getMyContentsThunk.fulfilled, (state, action) => {
        state.contentLoading = false;
        state.contentDone = true;
        state.contentData = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
