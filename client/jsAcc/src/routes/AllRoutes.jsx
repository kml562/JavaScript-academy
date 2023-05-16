import React  from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import { Home,Team } from '../pages/index.js'
import Dashboard from "../pages/Dashbord";
import Project from "../pages/Project";

const AllRoutes = () => {



  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
