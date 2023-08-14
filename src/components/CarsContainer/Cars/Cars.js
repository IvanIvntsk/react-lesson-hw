import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carsThunks} from "../../../redux/actions/CarsActions";
import Car from "../Car/Car";

const Cars = () => {
    const dispatch = useDispatch()
    const {cars} = useSelector(state => state.cars)
    useEffect(() => {
        dispatch(carsThunks.get())
    },[])
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;