import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={< Login />} />
        <Route path="/signup" element={< Signup />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
