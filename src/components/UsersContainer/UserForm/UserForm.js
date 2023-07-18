import React from 'react';
import {useForm} from "react-hook-form";

const UserForm = ({setUsers}) => {
const {register,reset, handleSubmit} = useForm()
    const Save = (user) => {
        fetch('https://jsonplaceholder.typicode.com/users',{
            headers:{'Content-type':'application/json'},
            method:'POST',
            body:JSON.stringify(user)
        })
            .then(value => value.json())
            .then(value => {
                setUsers(prev => [...prev, value])
                reset()
            })
    }
    return (
        <form onSubmit={handleSubmit(Save)}>

            <label>Name: <input type={"text"} placeholder={'name'} {...register('name')}/> </label>
            <label>UserName: <input type={"text"} placeholder={'username'} {...register('username')}/> </label>
            <label>Email <input type={"text"} placeholder={'email'} {...register('email')}/> </label>

            <button>Save</button>
        </form>
    );
};

export default UserForm;