import React from "react";
import LogoNTitle from "../../components/logo/LogoNTitle";
import { Nav } from 'reactstrap';
import { OffcanvasMenu } from "./OffCanvas";
import SwitchComp from "../../components/switch/Switch";

export const NavBar = (props) => {
    return (
        <Nav>
            <SwitchComp />
            <OffcanvasMenu />
            <LogoNTitle />
        </Nav>
    )
}  