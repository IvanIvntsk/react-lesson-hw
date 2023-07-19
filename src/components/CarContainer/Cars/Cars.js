import React, {useContext, useEffect, useState} from 'react';
import {carServices} from "../../../services/CarServices";
import Car from "../Car/Car";
import {Context} from "../CarContainer";

const Cars = () => {
    const [cars, setCars] = useState([])

    const {trigger} = useContext(Context)

    useEffect(()=>{
        carServices.getAll()
            .then(({data})=> setCars(data))
    },[trigger])
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;