import React from 'react';


const User = ({user}) => {

    const {id, name, username, email} = user

    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>UserName: {username}</div>
            <div>Email: {email}</div>
        </div>
    );
};

export default User;