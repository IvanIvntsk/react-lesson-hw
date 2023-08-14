import React from 'react';
import {useDispatch} from "react-redux";
import {carsActions, carsThunks} from "../../../redux/actions/CarsActions";

const Car = ({car}) => {
    const dispatch = useDispatch()
    const {id,brand, price, year} = car


    const updateCar = (car) => {
        dispatch(carsActions.update(id, car))
    }
    const deleteCar = (id) => {
        dispatch(carsThunks.delete(id))
    }
    return (
        <div>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => updateCar(car)}>update</button>
            <button onClick={() => deleteCar(id)}>delete</button>
        </div>
    );
};

export default Car;