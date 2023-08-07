import React from "react";
import { useDispatch } from "react-redux";
import { About } from "./About";
import { PostList } from "./PostList";
import { Settings } from "./Settings";

export const ContentCont = ({path}) => {
    const dispatch = useDispatch;

    const listing = () => {
        return (
            <div className="content-container">
                <PostList />
            </div>
        );
    };

    const about = () => {
        return (
            <div className="content-container">
                <About />
            </div>
            );
    };

    const settings = () => {
        return (
            <div className="content-container">
                <Settings />
            </div>
        )
    };

    switch (path) {
        case 'feed':
            dispatch();
            return listing();
        case 'about-me':
            dispatch();
            return about()
        case 'settings':
            dispatch();
            return settings();
        case 'search':
            dispatch();
            return listing();
        case 'user':
            dispatch();
            return about();
        default:
            return null;
    };
}