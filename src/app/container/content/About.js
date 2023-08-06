import React from "react";
import { PostList } from "./PostList";
import { Banner } from "../../components/banner/Banner";

export const About = (props) => {
    return (
        <div className="about-container">
            <Banner props={props.banner} />
            <PostList props={props.posts} />
        </div>
    )
}