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
        <div style={{display:"flex", justifyContent:"center",alignContent:"center", fontSize:"20px"}}>
            <form onSubmit={handleSubmit(add)}>

                <h1 style={{display:"flex",justifyContent:"center"}}>Comment Form</h1>

                <label>
                    <input type={'postId'} placeholder={'postId'} {...register('postId')}/>
                    <br/>
                    <input type={'name'} placeholder={'name'} {...register('name')}/>
                    <br/>
                    <input type={'email'} placeholder={'email'} {...register('email')}/>
                    <br/>
                    <input type={'body'} placeholder={'body'} {...register('body')}/>
                    <br/>
                    <button>Add</button>

                </label>
            </form>
        </div>
    );
};

export default UseForm;