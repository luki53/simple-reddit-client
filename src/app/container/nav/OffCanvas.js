import React, {useState} from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { Search } from "../../components/nav/Search";
import { NavLinkOffCan } from "../../components/nav/NavLink";
import Icon from '../../assets/svg-hamMenu.svg';
import './OffCanvas.css';

export const OffcanvasMenu = (props) => {
    const [hidden, setHidden] = useState(false);
    
    function showHiddeOffcanvas() {
        setHidden(!hidden);
    }

    return (
        <>
            <button className="menuButton" onClick={showHiddeOffcanvas}>
                <img src={Icon} alt="menu" />
            </button>
            <Offcanvas className="offcanvas" isOpen={hidden}>
                <OffcanvasHeader className="offcanvasHeader" toggle={showHiddeOffcanvas}>
                    Menu
                </OffcanvasHeader>
                <OffcanvasBody className="offcanvasBody">
                <Search />
                    <div className="nav-links">
                        <NavLinkOffCan  link="/" linkName="Home" />
                        <NavLinkOffCan  link="/about-me" linkName="About Me" />
                        <NavLinkOffCan  link="/settings" linkName="Settings" />
                    </div>
                </OffcanvasBody>
            </Offcanvas>
        </>
    )
}