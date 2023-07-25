import React from 'react';

import comments from "../../components/Comments/comments";
import {Outlet} from "react-router-dom";



const Comments = () => {
    return (
        <div>
            <comments/>
            <Outlet/>

        </div>
    );
};

export default Comments;