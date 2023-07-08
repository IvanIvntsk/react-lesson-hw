import React from 'react';
import './postDetail.css'

const PostDetail = ({post}) => {
    const {id, userId, title, body} = post
    return (
        <div className={'detail'}>
            <div><i>id:</i> {id}</div>
            <div>User: {userId}</div>
            <div>Title: {title}</div>
            <div>{body}</div>
        </div>
    );
};

export default PostDetail;