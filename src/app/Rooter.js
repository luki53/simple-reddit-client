import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import React from "react";
import { Container } from "reactstrap";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Container />} >
        <Route path="feed" element={<ContentCont path="feed" />} />
        <Route path="about-me" element={<ContentCont path="about-me" />} />
        <Route path="settings" element={<ContentCont path="settings" />} />
        <Route path="search">
            <Router path=":searchString" element={<ContentCont path="search" />} />
        </Route>
        <Route path="about">
            <Route path=":userNamen" element={<ContentCont path="user" />} />
        </Route>
    </Route>
))