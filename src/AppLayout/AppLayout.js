import React from 'react';
import Head from "../components/Head/Head";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <Head/>
            <Outlet/>
        </div>
    );
};

export default AppLayout;