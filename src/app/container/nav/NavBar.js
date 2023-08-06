import React from "react";
import LogoNTitle from "../../components/logo/LogoNTitle";
import { Nav } from 'reactstrap';
import { OffcanvasMenu } from "./OffCanvas";

const Banner = (props) => {
    return (
        <Nav>
            <OffcanvasMenu />
            <LogoNTitle />
        </Nav>
    )
}   