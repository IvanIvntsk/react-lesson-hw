import React from 'react';
import CommentForm from "./CommentForm/CommentForm";
import UseForm from "./UseForm/UseForm";

const Form = () => {
    return (
        <div>
            <CommentForm/>
            <hr/>
            <UseForm/>
        </div>
    );
};

export default Form;