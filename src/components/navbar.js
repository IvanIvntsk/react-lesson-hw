import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div style={{display:"flex", justifyContent:"space-around", backgroundColor:"yellow", color:"darkblue", fontSize:"30px"}}>
            <NavLink to={'todos'}>Todos</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
};

export default Navbar;