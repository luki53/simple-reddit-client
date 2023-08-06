import React, {useState} from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { Search } from "../../components/nav/Search";

export const OffcanvasMenu = (props) => {
    const [hidden, setHidden] = useState(false);
    
    function showHiddeOffcanvas() {
        setHidden(!hidden);
    }

    return (
        <>
            <button className="menuButton">
                <i className="menuButtonIcon" src={HamMenuIcon} onClick={showHiddeOffcanvas} alt="Menu"></i>
            </button>
            <Offcanvas className="offcanvas" idOpen={hidden}>
                <OffcanvasHeader className="offcanvasHeader" toggle={showHiddeOffcanvas}>
                    Menu
                </OffcanvasHeader>
                <OffcanvasBody className="offcanvasBody">
                    <Search />
                </OffcanvasBody>
            </Offcanvas>
        </>
    )
}