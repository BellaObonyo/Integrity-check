import React from "react";
import { Navigate } from "react-router-dom";

// Profile
import UserProfile from "../pages/Authentication/user-profile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// Dashboard
import Dashboard from "../pages/Dashboard/index";

// Pages
import IncidentReport from "../pages/Incidents&Reports/IncidentReport";
import IncidentDetails from "pages/Incidents&Reports/IncidentDetails";
import Alerts from "pages/Alerts/Alerts";
import Surveys from "pages/Surveys/Surveys";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },


  //profile
  { path: "/profile", component: <UserProfile /> },
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },


  { path: "/incidents", component: <IncidentReport /> },
  { path: "/incidents/:id", component: <IncidentDetails />},
  { path: "/alerts", component: <Alerts /> },
  { path: "/surveys", component: <Surveys/> },



];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
  
];

export { authProtectedRoutes, publicRoutes };
