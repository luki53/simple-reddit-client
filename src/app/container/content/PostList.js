import React, {useEffect, useRef} from "react";
import { Post } from "../../components/post/Post";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadAboutSubreddit } from "../../util/slice/abouts/aboutSubredditSlice";
import { loadAboutSearchresults } from "../../util/slice/listings/searchSlice";
import './PostList.css';

export const PostList = () => {
    const data = useSelector(state => state.bestSlice.listing);
    const aboutsData = useSelector(state => state.aboutSubredditSlice.abouts.payload);
    const loadingProcess = useSelector(state => state.aboutSubredditSlice.isLoading);
    const aboutMePosts = useSelector(state => state.aboutMeSlice);
    const searchResults = useSelector(state => state.searchSlice);
    let lastPath = useRef(useLocation().pathname);
    let isAvaiable = useRef(false);
    let isAvaiableSearch = useRef(false);
    const path = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!(lastPath.current === path.pathname)) {
            isAvaiableSearch.current = false;
            lastPath.current = path.pathname;
        }

        if (data.children && aboutsData === undefined && path.pathname === '/') {
            dispatch(loadAboutSubreddit(data));
        };
        
        if (data.children && aboutsData && path.pathname === '/') {
            console.log('best set to true');
            isAvaiable.current = true; 
        };

        if (Object.hasOwn(searchResults.results, 'payload') && !isAvaiableSearch.current) {
            console.log(searchResults.results.payload.data.children);
            dispatch(loadAboutSearchresults(searchResults.results.payload.data.children));
            console.log('dispatch call');
        };

        if (Object.hasOwn(searchResults.aboutResults, 'payload')) {
            isAvaiableSearch.current = true;
            console.log('set to true');
        };

    }, [isAvaiable, isAvaiableSearch.current, data, aboutsData, aboutMePosts, dispatch, loadingProcess, searchResults.aboutResults, searchResults.results]);

    if (isAvaiable.current && path.pathname === '/') {
        return (                        // muss noch überprüfen, ob die Daten schon geladen sind => sonst muss lade seite returned werden
            <div className="postList">
                {data.children.map((postData, index) => <Post data={postData.data} subreddit={aboutsData[index]} key={"post-" + index} />)}
            </div>
        )
    } else if(Object.hasOwn(aboutMePosts.posts, 'data') && path.pathname === '/about-me') {
        return (
            <div className="postList">{aboutMePosts.posts.data.children.map((postData, index) => <Post data={postData.data} subreddit={aboutsData[index]} key={"post-" + index} />)}</div>
        )
    } else if (isAvaiableSearch.current) {
        return (
            <div className="postList">
                {searchResults.results.payload.data.children.map((postData, index) => <Post data={postData.data} subreddit={searchResults.aboutResults.meta.arg[index]} key={"post-" + index} />)}
            </div>
        )
    } else {
        return <p>is Loading</p>
    }
}