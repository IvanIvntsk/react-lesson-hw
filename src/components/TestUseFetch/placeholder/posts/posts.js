import React from 'react';
import Post from "./post/post";

const Posts = ({posts}) => {
    return (
        <div>
            <h1>Posts:</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;