import React from 'react';
import CommentsForm from "./ComentsForm/CommentsForm";
import Comments from "./Comments/Comments";

const CommentsContainer = () => {
    return (
        <div>
            <CommentsForm/>
            <Comments/>
        </div>
    );
};

export default CommentsContainer;