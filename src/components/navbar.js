import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <NavLink to={'todos'}>Todos</NavLink>
            <br/>
            <br/>
            <NavLink to={'albums'}>Albums</NavLink>
            <br/>
            <br/>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
};

export default Navbar;