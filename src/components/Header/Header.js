import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div style={{
            width: "100%",
            height: "70px",
            backgroundColor: "black",
            justifyContent: "center",
            display:"flex"

        }}>
            <NavLink to={'cars'} style={{color: "white", fontSize: "40px", textDecoration: "none"}}>Cars</NavLink>
        </div>
    );
};

export default Header;