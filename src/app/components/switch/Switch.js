// https://www.npmjs.com/package/react-switch => for Iphone swtyled switch dark/light-moden
import React from "react";
import { Switch as SwitchDefault} from 'react-switch';

export const Switch = ({setSwitchState, switchState}) => {
    
    const handleSwitch = () => {
        setSwitchState(!switchState);
    } 

    return (
        <>
            <SwitchDefault onChange={handleSwitch} checked={switchState} className="switch" />
        </>
    )
}