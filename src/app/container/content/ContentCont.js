import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { About } from "./About";
import { PostList } from "./PostList";
import { Settings } from "./Settings";
import { loadBestPosts } from "../../util/slice/listings/bestSlice";
import { loadAboutMe } from "../../util/slice/abouts/aboutMeSlice";
import { loadSettings } from "../../util/slice/settingsSlice";
import { loadAboutUser } from "../../util/slice/abouts/aboutUserSlice";
import './contentCont.css';

export const ContentCont = () => {
    const dispatch = useDispatch();
    const path = useLocation();
    const pathname = useRef('/')
    const stringToSearchFor = useSelector(state => state.searchSlice);
    const user = useSelector(state => state.aboutUserSlice.user);

    if (path.pathname.includes('/fetch')) {
        pathname.current = '/fetch';
    } else {
        pathname.current = path.pathname;
    }

    useEffect(() => {
        switch (pathname.current) {
            case '/':
                dispatch(loadBestPosts());
                break;
            case '/about-me':
                dispatch(loadAboutMe());
                break;
            case '/settings':
                console.log('calld settings');
                dispatch(loadSettings());
                break;
            case '/user':
                dispatch(loadAboutUser(user));
                break;
            default:
                console.log('Nothing to fetch');
        }
    }, [stringToSearchFor, user, dispatch, path, path.pathname]);

    const getContent = () => {
        switch (pathname.current) {
            case '/':
            case '/fetch':
                return listing();
            case '/about-me':
            case '/user':
                return about();
            case '/settings':
                return settings();
            default:
                return null;
        }
    };

    const listing = () => (
        <div className="content-container">
            <PostList />
        </div>
    );

    const about = () => (
        <div className="content-container">
            <About />
        </div>
    );

    const settings = () => (
        <div className="content-container">
            <Settings />
        </div>
    );

    return getContent();
};
