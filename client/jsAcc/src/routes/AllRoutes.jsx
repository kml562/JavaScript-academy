import React  from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import { CreateNotes, EditNote, Home,NoteDetails,Search,Team, Tech, UserDashboard } from '../pages/index.js'
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
        <Route path="/user/:id" element={<UserDashboard />} />
        <Route path="/note/:id" element={<NoteDetails />} />
        <Route path="/create" element={<CreateNotes />} />
        <Route path="/tech/:id" element={<Tech />} />
        <Route path="/edit/:id" element={<EditNote />} />
        <Route path="/search" element={<Search />} />
        
      </Routes>
    </div>
  );
};

export default AllRoutes;
