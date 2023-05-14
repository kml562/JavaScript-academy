import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import { Home } from '../pages/index.js'
const AllRoutes = () => {



  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Homepage />} />
        <Route path="/login" element={< Login />} />
        <Route path="/signup" element={< Signup />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
