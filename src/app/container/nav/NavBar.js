import React from "react";
import LogoNTitle from "../../components/logo/LogoNTitle";
import { Nav } from 'reactstrap';
import { OffcanvasMenu } from "./OffCanvas";
import { Switch } from "../../components/switch/Switch";

export const Banner = (props) => {
    return (
        <Nav>
            <Switch />
            <OffcanvasMenu />
            <LogoNTitle />
        </Nav>
    )
}   