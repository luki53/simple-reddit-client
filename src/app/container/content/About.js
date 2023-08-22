import React, { useEffect, useState } from "react";
import { PostList } from "./PostList";
import { Banner } from "../../components/banner/Banner";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadMyPosts } from "../../util/slice/abouts/aboutMeSlice";

export const About = (props) => {
    const dispatch = useDispatch()
    const aboutMe = useSelector(state => state.aboutMeSlice.data);
    const aboutUser = useSelector(state => state.aboutUserSlice);
    const [loadingProcess, setLoadingProcess] = useState(false)
    const path = useLocation();
    

    useEffect(() => {
        if (path.pathname === '/about-me' && Object.hasOwn(aboutMe, 'name') && !loadingProcess) {
            dispatch(loadMyPosts(aboutMe.name));
            setLoadingProcess(true);
        }
    }, [aboutMe, aboutUser, loadingProcess, dispatch, path.pathname]);

console.log(Object.hasOwn(aboutMe, 'name'));

    if (Object.hasOwn(aboutMe, 'name') && path.pathname === '/about-me') {
        
        return (
            <>
                <Banner props={aboutMe} />
                <PostList />
            </>
        )
    } else if (Object.hasOwn(aboutUser, 'name')) {
        return (
            <>
                <Banner props={aboutUser} />
                <PostList props={props.posts} />
            </>
        );
    } else {
        return <p>Still loading!!!!</p>
    }
}