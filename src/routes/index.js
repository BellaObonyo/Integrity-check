import React from "react";
import { Navigate } from "react-router-dom";

// Profile

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// Dashboard
import Dashboard from "../pages/Dashboard/index";
import FileManager from "../pages/FileManager/index";
// import Statistics from "pages/Statistics";

// Pages

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/apps-filemanager", component: <FileManager /> },
  // { path: "/statistics", component: <Statistics /> },



   
  //profile
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
  
];

export { authProtectedRoutes, publicRoutes };
