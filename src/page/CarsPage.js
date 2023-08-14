import React from 'react';

import Cars from "../components/CarsContainer/Cars/Cars";
import CarsForm from "../components/CarsContainer/CarsForm/CarsForm";

const CarsPage = () => {
    return (
        <div>
            <CarsForm/>
            <Cars/>
        </div>
    );
};

export default CarsPage;