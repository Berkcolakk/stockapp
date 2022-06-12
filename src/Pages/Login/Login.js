import React, { Component, useEffect } from 'react'
import LoginComponent from '../../Components/Login/Login';
import { useNavigate  } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const userInformation = localStorage.getItem("authUser");
        if (userInformation) {
            navigate("/");
        }
    }, [navigate])
    return (
        <LoginComponent />
    )
}
export default Login;