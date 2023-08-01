import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
    return (
        <div className={styles.div}>
            <NavLink to={'cars'} className={styles.one}>Cars</NavLink>
            <NavLink to={'posts'} className={styles.one}>Posts</NavLink>
            <NavLink to={'Comments'} className={styles.one}>Comments</NavLink>
        </div>
    );
};

export default Header;