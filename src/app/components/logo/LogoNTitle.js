import React from "react";
import './LogoNTitle.css';
import logoWhite from '../../assets/reddit-symbol-white.png'

export default function LogoNTitle (porps){
    return (
        <div className="siteLogoTitle">
            <img src={logoWhite} alt='reddit logog' className='logo-img' />
            <p className="logoText">Reddit Micro Client</p>
        </div >
    )
};