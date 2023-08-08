import React from "react";
import Switch from 'react-switch';

// https://www.npmjs.com/package/react-switch => for Iphone swtyled switch dark/light-moden

const SwitchComp = ({setSwitchState, switchState}) => {
    
    const handleSwitch = () => {
        setSwitchState(!switchState);
    }

    return (
        <>
            <Switch onChange={handleSwitch} checked={switchState} className="switch" />
        </>
    );
}

export default SwitchComp;