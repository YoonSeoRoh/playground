import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk("LOGIN", async (formData) => {
  const response = await fetch("http://localhost:4444/login", {
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
  const response = await fetch("http://localhost:4444/register", {
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

export const addJoinedThunk = createAsyncThunk(
  "ADD_JOINED",
  async (formData) => {
    const response = await fetch("http://localhost:4444/users", {
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

export const getMyContentsThunk = createAsyncThunk(
  "GET_MYCONTENTS",
  async (email) => {
    const response = await fetch(
      `http://localhost:4444/mainContent?email=${email}`
    );
    const data = await response.json();
    return data;
  }
);

export const getMyCommentsThunk = createAsyncThunk(
  "GET_MYCOMMENTS",
  async (email) => {
    const response = await fetch(
      `http://localhost:4444/comment?email=${email}`
    );
    const data = await response.json();
    return data;
  }
);
