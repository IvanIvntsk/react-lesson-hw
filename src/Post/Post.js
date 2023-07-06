import React from 'react';

const Post = (props) => {
    const {post} = props
    return (
        <div>
            <h6>{post.title}</h6>
            <p>{post.id}</p>
        </div>
    );
};

export default Post;