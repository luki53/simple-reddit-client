import React from "react";
import { Post } from "../../components/post/Post";
import { UseSelector } from "react-redux/es/hooks/useSelector";

export const PostList = (props) => {
    return (
        <div className="postList">
            {props.data.map((postData, index) => <Post props={postData} key={"post-" + index} />)}
        </div>
    )
}