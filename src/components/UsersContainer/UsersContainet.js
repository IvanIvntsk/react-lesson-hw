import UserForm from "./UserForm/UserForm";
import Users from "./Users/Users";
import {useState} from "react";

const UsersContainet = () => {
    const[users, setUsers] = useState([])

    return (
        <div>
           <UserForm setUsers={setUsers}/>
           <Users users={users} setUsers={setUsers}/>
        </div>
    );
};

export default UsersContainet;