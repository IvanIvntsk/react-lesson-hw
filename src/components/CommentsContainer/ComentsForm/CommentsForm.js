import React from 'react';
import {useForm} from "react-hook-form";

const CommentsForm = ({setComments}) => {

        const {register,reset,handleSubmit} = useForm()
        const Save = (comment) => {
        fetch('https://jsonplaceholder.typicode.com/comments',{
            headers:{'Content-type':'application/json'},
            method:'POST',
            body:JSON.stringify(comment)
        })
            .then(value => value.json())
            .then(value => {
                setComments(prev=>[...prev, value])
                reset()
            })
        }


    return (
        <form onSubmit={handleSubmit(Save)}>

            <label><input type={"text"} placeholder={'postId'} {...register('postId')}/></label>
            <label><input type={"text"} placeholder={'name'} {...register('name')}/></label>
            <label><input type={"text"} placeholder={'email'} {...register('email')}/></label>
            <label><input type={"text"} placeholder={'body'} {...register('body')}/></label>

            <button>Save</button>

        </form>
    );
};

export default CommentsForm;