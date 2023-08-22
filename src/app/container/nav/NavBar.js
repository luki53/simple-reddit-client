import React from "react";
import LogoNTitle from "../../components/logo/LogoNTitle";
import { Nav } from 'reactstrap';
import { OffcanvasMenu } from "./OffCanvas";
import SwitchComp from "../../components/switch/Switch";
import './NavBar.css';

export const NavBar = () => {
    return (
        <Nav className="navBarContainer">
            <OffcanvasMenu />
            <LogoNTitle />
            <SwitchComp />
        </Nav>
    )
}  