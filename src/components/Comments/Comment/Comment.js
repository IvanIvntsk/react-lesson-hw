import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {id, name, email, body} = comment

    const navigate = useNavigate()
    return (
        <div>
            <h3>id:{id}</h3>
            <div>Name:{name}</div>
            <div>Email:{email}</div>
            <div>Body:{body}</div>

            <button>Post</button>
        </div>
    );
};

export default Comment;