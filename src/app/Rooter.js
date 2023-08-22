import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import React from "react";
import { ContentCont } from "./container/content/ContentCont";
import App from "./App";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<p>The route is not fond: 404</p>}>
        <Route path=""  element={<ContentCont />} />
        <Route path="about-me" element={<ContentCont />} />
        <Route path="settings" element={<ContentCont />} />
        <Route path="fetch/:string" element={<ContentCont />} />
        <Route path="about/:userNamen" element={<ContentCont />}>
        </Route>
    </Route>
));