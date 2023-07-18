import React, {useState} from 'react';
import CarForm from "./CarForm/CarForm";
import Cars from "./Cars/Cars";

const CarContainer = () => {
    const [cars, setCars] = useState([])
    return (
        <div>
            <CarForm setCars={setCars}/>
            <Cars cars={cars} setCars={setCars}/>
        </div>
    );
};

export default CarContainer;