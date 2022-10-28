import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiBaseUrl } from "../libs/config";

export const getContentsThunk = createAsyncThunk("GET_CONTENTS", async () => {
  const response = await fetch(`${apiBaseUrl}/mainContent`);
  const data = await response.json();
  return data;
});

export const getContentThunk = createAsyncThunk("GET_CONTENT", async (id) => {
  const response = await fetch(`${apiBaseUrl}/mainContent/${id}`);
  const data = await response.json();
  return data;
});

export const addContentThunk = createAsyncThunk(
  "ADD_CONTENT",
  async (formData) => {
    const response = await fetch(`${apiBaseUrl}/mainContent`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  }
);

export const deleteContentThunk = createAsyncThunk(
  "DELETE_CONTENT",
  async (id) => {
    const response = await fetch(`${apiBaseUrl}/mainContent/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  }
);

export const addJoinThunk = createAsyncThunk("ADD_JOIN", async (formData) => {
  const response = await fetch(`${apiBaseUrl}/mainContent/${formData.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      joined: formData.joined,
    }),
  });
  const data = await response.json();
  return data;
});

export const deleteJoinThunk = createAsyncThunk(
  "DELETE_JOIN",
  async (formData) => {
    const response = await fetch(`${apiBaseUrl}/mainContent/${formData.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        joined: formData.joined,
      }),
    });
    const data = await response.json();
    return data;
  }
);

export const getCommentsThunk = createAsyncThunk(
  "GET_COMMENTS",
  async (contentId) => {
    const response = await fetch(
      `${apiBaseUrl}/comment?contentId=${contentId}`
    );
    const data = await response.json();
    return data;
  }
);

export const addCommentThunk = createAsyncThunk(
  "ADD_COMMENT",
  async (formData) => {
    const response = await fetch(`${apiBaseUrl}/comment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  }
);

export const deleteCommentThunk = createAsyncThunk(
  "DELETE_COMMENT",
  async (id) => {
    const response = await fetch(`${apiBaseUrl}/comment/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  }
);

export const editCommentThunk = createAsyncThunk(
  "EDIT_COMMENT",
  async (formData) => {
    const response = await fetch(
      `http://localhost:4444/comment/${formData.id}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: formData.comment,
        }),
      }
    );
    const data = await response.json();
    return data;
  }
);
