import React from "react";

export const NavLink = (props) => {
    return (
        <>
            <a href={props.link} alt={props.linkDesc} />
            <div className="navDevider"></div>
        </>
    )
}