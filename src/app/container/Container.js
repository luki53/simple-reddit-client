import React from "react";
import { ContentCont } from "./content/ContentCont";
import { NavBar } from "./nav/NavBar";

const Container = () => {
    return (
        <div className="container">
            <NavBar />
            <ContentCont />
        </div>
    );
};

export default Container;