import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import { privateRoutes, publicRoutes } from "../router/routes";
import Posts from "../pages/Posts";
import { AuthContext } from "../context/context";

function AppRouter() {
  const { isAuth, setisAuth } = useContext(AuthContext);
  return isAuth ? (
    <Routes>
      {privateRoutes.map(route => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route key="/*" path="/*" element={<Posts />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(route => (
        <Route element={<route.element />} key={route.path} path={route.path} />
      ))}
      <Route key="/*" path="/*" element={<Login />} />
    </Routes>
  );
}

export default AppRouter;
