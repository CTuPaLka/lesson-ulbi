import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Post from "../pages/Post";
import PostIdPage from "../pages/PostIdPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/" element={<Posts />}></Route>
      <Route path="/posts/:id" element={<PostIdPage />}></Route>
      {/* данная строка при неизвестном url перенаправляет на компонент постов */}
      <Route path="/*" element={<Navigate to="/posts" />} />
    </Routes>
  );
}

export default AppRouter;
