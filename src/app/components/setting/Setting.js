import React from "react";
import SwitchComp from '../switch/Switch'

/*
    ONLY boolean settings

    - email_messages
    - enable_followers
    - hide_from_robots
    - hide_ads
    - Is over 18
    - search includes over 18 content
*/ 

export const Setting = (props) => {
    return (
        <div className="setting">
            <p className="setting-name">{props.settingName}</p>
            <SwitchComp props={props.settingState} />
        </div>
    )
}