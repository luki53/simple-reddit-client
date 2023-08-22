import React from "react";
import { NavLink } from "react-router-dom";
import './NavLink.css';

export const NavLinkOffCan = ({link, linkName}) => {
    return (
        <>
            <NavLink className="navLinkOffCan" to={link} alt={linkName}>{linkName}</NavLink>
            <div className="navDevider"></div>
        </>
    )
}