import React from 'react';

import style from './Head.module.css'
import {NavLink} from "react-router-dom";

const Head = () => {
    return (
        <div className={style.head}>
            <NavLink to={'callback'}>Callback</NavLink>
            <NavLink to={'toggle'}>Toggle</NavLink>
            <NavLink to={'memo'}>Memo</NavLink >
            <NavLink to={'fetch'}>Fetch</NavLink>
            <NavLink to={'array'}>Array</NavLink>
        </div>
    );
};

export default Head;