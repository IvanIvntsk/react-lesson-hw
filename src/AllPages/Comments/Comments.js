import React from 'react';

import {Outlet} from "react-router-dom";
import comments from "../../components/Comments/comments";



const Comments = () => {
    return (
        <div>
            <comments/>
            <Outlet/>

        </div>
    );
};

export default Comments;