import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {usersServices} from "../../Services/UsersServices/UsersServices";
import {Context} from "../Form";

const UseForm = () => {
    const {reset, register,handleSubmit} = useForm()
    const [errors, setErrors] = useState([])
    const {setTrigger} = useContext(Context)
    const submit = async (user) => {
        try {
            await usersServices.create(user)
                .then(data=>console.log(data))
            setErrors(null)
            reset(user)
            setTrigger()
        }catch (e) {
           setErrors(e.response.data)
        }

    }

    return (
        <div style={{display:"flex", justifyContent:"center",alignContent:"center", fontSize:"20px"}}>
            <form onSubmit={handleSubmit(submit)}>

                <h1 style={{margin:"0"}}>User Form</h1>

                <label>
                    <input type={'name'} placeholder={'name'} {...register('name')}/>
                    <br/>
                    <input type={'username'} placeholder={'username'} {...register('username')}/>
                    <br/>
                    <input type={'email'} placeholder={'email'} {...register('email')}/>
                    <br/>
                    <input type={'address'} placeholder={'address'} {...register('address')}/>
                    <br/>
                    <button>Submit</button>

                </label>
            </form>
        </div>
    );
};

export default UseForm;