import React, {useState} from 'react';
import CommentsForm from "./ComentsForm/CommentsForm";
import Comments from "./Comments/Comments";

const CommentsContainer = () => {

    const [comments, setComments] = useState([])

    return (
        <div>
            <CommentsForm setComments={setComments}/>
            <Comments comments={comments} setComments={setComments}/>
        </div>
    );
};

export default CommentsContainer;