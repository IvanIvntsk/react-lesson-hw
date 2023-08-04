import React from 'react';

import useFetch from "../../hooks/useFetch";

import Users from "./placeholder/users/users";
import Comments from "./placeholder/comments/comments";
import Posts from "./placeholder/posts/posts";

const TestUseFetch = () => {

    const users = useFetch('/users')
    const comments = useFetch('/comments')
    const posts = useFetch('/posts')

    return (
        <div style={{display:"flex"}}>
            <Users users={users}/>
            <hr/>
            <Comments comments={comments}/>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export default TestUseFetch;