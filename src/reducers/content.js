import { createSlice } from "@reduxjs/toolkit";
import {
  getContentsThunk,
  getContentThunk,
  addContentThunk,
  deleteContentThunk,
  getCommentsThunk,
  addCommentThunk,
  deleteCommentThunk,
} from "../actions/content";

const initialState = {
  contentsData: [],
  contentsLoading: false,
  contentsDone: false,
  contentData: null,
  contentLoading: false,
  contentDone: false,
  addContent: null,
  addContentLoading: false,
  addContentDone: false,
  deleteContent: null,
  deleteContentLoading: false,
  deleteContentDone: false,
  commentsData: [],
  commentsLoading: false,
  commentsDone: false,
  addComment: null,
  addCommentLoading: false,
  adCommentDone: false,
  deleteComment: null,
  deleteCommentLoading: false,
  deleteCommentDone: false,
};

export const contentSlice = createSlice({
  name: "content",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContentsThunk.pending, (state, action) => {
        state.contentsLoading = true;
        state.contentsDone = false;
      })
      .addCase(getContentsThunk.fulfilled, (state, action) => {
        state.contentsLoading = false;
        state.contentsDone = true;
        state.contentsData = action.payload;
      })
      .addCase(getContentThunk.pending, (state, action) => {
        state.contentLoading = true;
        state.contentDone = false;
      })
      .addCase(getContentThunk.fulfilled, (state, action) => {
        state.contentLoading = false;
        state.contentDone = true;
        state.contentData = action.payload;
      })
      .addCase(addContentThunk.pending, (state, action) => {
        state.addContentLoading = true;
        state.addContentDone = false;
      })
      .addCase(addContentThunk.fulfilled, (state, action) => {
        state.addContentLoading = false;
        state.addContentDone = true;
        state.addContentData = action.payload;
      })
      .addCase(deleteContentThunk.pending, (state, action) => {
        state.deleteContentLoading = true;
        state.deleteContentDone = false;
      })
      .addCase(deleteContentThunk.fulfilled, (state, action) => {
        state.deleteContentLoading = false;
        state.deleteContentDone = true;
        state.deleteContentData = action.payload;
      })
      .addCase(getCommentsThunk.pending, (state, action) => {
        state.commentsLoading = true;
        state.commentsDone = false;
      })
      .addCase(getCommentsThunk.fulfilled, (state, action) => {
        state.commentsLoading = false;
        state.commentsDone = true;
        state.commentsData = action.payload;
      })
      .addCase(addCommentThunk.pending, (state, action) => {
        state.addCommentLoading = true;
        state.addCommentDone = false;
      })
      .addCase(addCommentThunk.fulfilled, (state, action) => {
        state.addCommentLoading = false;
        state.addCommentDone = true;
        state.addCommentData = action.payload;
      })
      .addCase(deleteCommentThunk.pending, (state, action) => {
        state.deleteCommentLoading = true;
        state.deleteCommentDone = false;
      })
      .addCase(deleteCommentThunk.fulfilled, (state, action) => {
        state.deleteCommentLoading = false;
        state.deleteCommentDone = true;
        state.deleteCommentData = action.payload;
      });
  },
});

export default contentSlice.reducer;
