import React, { useState, useEffect } from "react";
import { Setting } from "../../components/setting/Setting";
import { useSelector, useDispatch } from "react-redux";

export const Settings = () => {
    const settings = useSelector(selectSettings);
    const dispatch = useDispatch;
    
    const handleSettingChange = (settingState) => {
        dispatch(dipatchSetting(settingState));
    }

    const handleSettingSave = (settingsObject) => {
        dispatch(dispatchSaveSettings(settingsObject));
    }

    return (
        <div className="settingsList">
            <h2>Settings:</h2>
            <div className="settingsDivider"></div>
            {settings.map((setting, index) => <Setting props={setting} handleChange={handleSettingChange} key={"setting-" + index} />)}
            <buttion type='submit' onClick={handleSettingSave(settings)}>Save</buttion>
        </div>
    )
}