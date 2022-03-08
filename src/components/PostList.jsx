import React from "react";
import PostItem from '../components/PostItem';
import '../App.css'

function PostList({posts, title, remove}) {
    return (
        <div className="post-list">
            <h1>{title}</h1>
            {posts.map(el =>
                <PostItem post={el} key={el.id} remove={remove} />
            )}
        </div>
    )
}

export default PostList;