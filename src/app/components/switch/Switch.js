import React from "react";
import Switch from 'react-switch';
import './Switch.css';

// https://www.npmjs.com/package/react-switch => for Iphone swtyled switch dark/light-moden

const SwitchComp = ({setSwitchState, switchState, stateName}) => {
    
    const handleSwitch = () => {
        setSwitchState(stateName);
    }

    return (
        <>
            <Switch onChange={handleSwitch} checked={switchState} className="switch" />
        </>
    );
}

export default SwitchComp;