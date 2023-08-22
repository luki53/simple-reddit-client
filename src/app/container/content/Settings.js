import React, { useState, useEffect } from "react";
import { Setting } from "../../components/setting/Setting";
import { useSelector, useDispatch } from "react-redux";
import { patchSettings, changeSetting } from "../../util/slice/settingsSlice";
import './Settings.css';

export const Settings = () => {
    const settings = useSelector(state => state.settingsSlice.userSettings);
    const dispatch = useDispatch();
    
    useEffect(() => {
}, [settings.payload, dispatch]);

    const handleSettingChange = (settingName) => {
        dispatch(changeSetting(settingName));
    }

    const handleSettingSave = () => {
        dispatch(patchSettings(settings.payload));
    }

    if (Object.hasOwn(settings, "payload")){
        return (
        <div className="settingsList">
            <h2>Settings:</h2>
            <div className="settingsDivider"></div>
                <Setting switchState={settings.payload['email_messages']} settingName="email_messages" setSwitchState={handleSettingChange} />
                <Setting switchState={settings.payload['enable_followers']} settingName="enable_followers" setSwitchState={handleSettingChange} />
                <Setting switchState={settings.payload['hide_from_robots']} settingName="hide_from_robots" setSwitchState={handleSettingChange} />
                <Setting switchState={settings.payload['hide_ads']} settingName="hide_ads" setSwitchState={handleSettingChange} />
                <Setting switchState={settings.payload['over_18']} settingName="over_18" setSwitchState={handleSettingChange} />
                <Setting switchState={settings.payload['search_include_over_18']} settingName="search_include_over_18" setSwitchState={handleSettingChange} />
            <button type='submit' onClick={handleSettingSave} className="saveSettingButton">Save</button>
        </div>
    )
} else {
    return (
        <p>Settings are loading</p>
    )
}
}