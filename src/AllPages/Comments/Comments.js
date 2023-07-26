import React from 'react';

import {Outlet} from "react-router-dom";
import CommenTs from "../../components/Comments/CommenTs";



const Comments = () => {
    return (
        <div style={{display:"flex"}}>
            <CommenTs/>
            <Outlet/>

        </div>
    );
};

export default Comments;