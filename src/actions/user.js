import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiBaseUrl } from "../libs/config";

export const loginThunk = createAsyncThunk("LOGIN", async (formData) => {
  const response = await fetch(`${apiBaseUrl}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  return data;
});

export const signupThunk = createAsyncThunk("SIGN_UP", async (formData) => {
  const response = await fetch(`${apiBaseUrl}/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  return data;
});

export const editJoinedThunk = createAsyncThunk(
  "ADD_JOINED",
  async (formData) => {
    const response = await fetch(`${apiBaseUrl}/${formData.id}`, {
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

export const getMyContentsThunk = createAsyncThunk(
  "GET_MYCONTENTS",
  async (email) => {
    const response = await fetch(`${apiBaseUrl}/mainContent?email=${email}`);
    const data = await response.json();
    return data;
  }
);

export const getMyCommentsThunk = createAsyncThunk(
  "GET_MYCOMMENTS",
  async (email) => {
    const response = await fetch(`${apiBaseUrl}/comment?email=${email}`);
    const data = await response.json();
    return data;
  }
);
