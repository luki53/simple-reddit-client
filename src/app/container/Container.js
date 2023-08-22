import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./nav/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import './appContainer.css';

const Container = () => {
    return (
        <div className="app-container">
            <NavBar />
            <Outlet /> 
        </div>
    );
};

export default Container;