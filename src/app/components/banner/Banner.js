import React from "react";

export const Banner = (props) => {

    return (
        <div className="bannerContainer">
            <div className="bannerSubRedditText">
                <h2 class="bannerName">{props.name}</h2>
                {props.bannerInfo ? props.bannerInfo.map((element, index) => {return (<div className="bannerElement" for={index} >
                    <h3 className="bannerElementTitle">{element.name}</h3>
                    <p className="bannerElementInfo">{element.info}</p>
                </div>)}) : ''}
            </div>
            <div className="bannerLogoContainer">
                <div className="bannerLogoMask">
                    <img src={props.subreddit.icon_img} alt="banner picture" />
                </div>
            </div>
        </div>
    );
}