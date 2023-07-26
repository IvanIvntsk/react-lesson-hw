import React from 'react';

const PostDetails = ({post}) => {
    const {id, title, body} = post
    return (
        <div>
            <h3>id: {id}</h3>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default PostDetails;