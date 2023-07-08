import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";

const Posts = () => {
    const [post, setPost] = useState([])
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value=> setPost(value))
        .catch()
},[])
    return (
        <div>
            {post.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;