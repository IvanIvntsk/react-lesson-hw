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
        <div>
            <form>

                <h1>User Form</h1>

                <label onSubmit={handleSubmit(submit)}>
                    <input type={'name'} placeholder={'name'} {...register('name')}/>
                    <input type={'username'} placeholder={'username'} {...register('username')}/>
                    <input type={'email'} placeholder={'email'} {...register('email')}/>
                    <input type={'address'} placeholder={'address'} {...register('address')}/>

                    <button>Submit</button>

                </label>
            </form>
        </div>
    );
};

export default UseForm;