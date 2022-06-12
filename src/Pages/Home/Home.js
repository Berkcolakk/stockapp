import React, { Component,useEffect } from 'react'
import { useNavigate  } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() =>{
    const user = localStorage.getItem("authUser");
    if (!user) {
      navigate("/Login");
    }
  },[navigate])
  return (
    <div>Home</div>
  )
}
export default Home;