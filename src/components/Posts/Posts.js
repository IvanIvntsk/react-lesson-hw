import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";

const Posts = ({userId}) => {

    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(post => setPost(post))
    }, [userId])

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;