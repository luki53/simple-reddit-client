import React from "react";
import { NavLink } from "react-router-dom";

export const NavLink = (props) => {
    return (
        <>
            <NavLink to={props.link} alt={props.linkName}>{props.linkName}</NavLink>
            <div className="navDevider"></div>
        </>
    )
}