import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {commentServices} from "../../Services/UsersServices/UsersServices";
import {Context} from "../Form";

const UseForm = () => {
    const {reset, register,handleSubmit} = useForm()
    const [errors, setErrors] = useState([])
    const {setTrigger} = useContext(Context)
    const add = async (comment) => {
        try {
            await commentServices.create(comment)
                .then(data=>console.log(data))
            setErrors(null)
            reset(comment)
            setTrigger()
        }catch (e) {
            setErrors(e.response.data)
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(add)}>

                <h1>Comment Form</h1>

                <label>
                    <input type={'postId'} placeholder={'postId'} {...register('postId')}/>
                    <input type={'name'} placeholder={'name'} {...register('name')}/>
                    <input type={'email'} placeholder={'email'} {...register('email')}/>
                    <input type={'body'} placeholder={'body'} {...register('body')}/>

                    <button>Add</button>

                </label>
            </form>
        </div>
    );
};

export default UseForm;