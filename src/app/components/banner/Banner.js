import React from "react";
import moment from "moment";
import './Banner.css';

export const Banner = (props) => {
    const imgUrl = props.props.icon_img.split('?');

    console.log(props);
    return (
        <div className="bannerContainer">
            <div className="bannerSubRedditText">
                <h2 className="bannerName">{props.props.name}</h2>
                    <div className="bannerInfo">
                        <h3 className="bannerElementTitle">Created:</h3>
                        <p className="bannerElementInfo">{moment.unix(props.props.created_utc).fromNow()}</p>
                    </div>
                    <div className="bannerInfo">
                        <h3 className="bannerElementTitle">Total Karma:</h3>
                        <p className="bannerElementInfo">{props.props.total_karma}</p>
                    </div>
                    <div className="bannerInfo">
                        <h3 className="bannerElementTitle">Friends:</h3>
                        <p className="bannerElementInfo">{props.props.num_friends}</p>
                    </div>
                    <div className="bannerInfo">
                        <h3 className="bannerElementTitle">Subscribers:</h3>
                        <p className="bannerElementInfo">{props.props.subreddit.subscribers}</p>
                    </div>
            </div>
            <div className="bannerLogoContainer">
                <div className="bannerLogoMask">
                   <img src={imgUrl[0]} alt="banner" className="bannerImg" />
                </div>
            </div>
        </div>
    );
}