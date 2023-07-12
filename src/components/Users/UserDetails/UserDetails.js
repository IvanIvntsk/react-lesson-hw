import React from 'react';

const UserDetails = ({value}) => {
    const {id, name, username, email} =value
    return (
        <div>
            <h5>id: {id}</h5>
            <h3>name: {name}</h3>
            <h3>username: {username}</h3>
            <p>email: {email}</p>
        </div>
    );
};

export default UserDetails;