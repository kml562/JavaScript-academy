import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { useLocation, useNavigate } from "react-router";

function App() {
  const location = useLocation();
  const navigate = useNavigate()
  const routeName = location.pathname; 

  console.log(routeName)

  useEffect(()=>{
    if(routeName==='/'){
      const token = localStorage.getItem('token'); // get token from local storage
      const user = JSON.parse(localStorage.getItem('user')); // get user data from local storage

      if(!token && !user){
        // getEvents()
        navigate('/');
      }
      else{
        console.log("Yoo")
        navigate('/welcome');
      }
    }
  },[])

  return (
    <>
      <AllRoutes />
    </>
  );
}

export default App;
