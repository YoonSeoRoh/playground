import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Main from "./pages/Main";
import ContentDetail from "./pages/ContentDetail";
import WriteContent from "./pages/WriteContent";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/content/:id" element={<ContentDetail />} />
          <Route path="/writecontent" element={<WriteContent />} />
          <Route path="/mypage" element={<MyPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
