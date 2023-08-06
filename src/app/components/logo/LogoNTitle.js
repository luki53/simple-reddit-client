import React from "react";

export default function LogoNTitle (porps){
    return (
        <div className="siteLogoTitle">
            <img src={porps.logoUri} alt='reddit logog' className='logo-img' />
            <p className="logoText">Reddit Micro Client</p>
        </div >
    )
};