import React, {useEffect} from 'react';

import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carsThunks} from "../../../redux/actions/CarsActions";

const CarsForm = () => {
    const dispatch = useDispatch()
    const {update, carUpdate} = useSelector(state => state.cars)
    const {register,reset,setValue,handleSubmit} = useForm()

    useEffect(() => {
        setValue('brand',carUpdate.brand)
        setValue('price',carUpdate.price)
        setValue('year', carUpdate.year)
    },[carUpdate])
    const save =  (car) => {
        dispatch(carsThunks.create(car))
        reset()
    }

    const updateCar = (car) => {
        dispatch(carsThunks.update(carUpdate.id, car))
            .then(()=> reset())
    }

    return (
      <form onSubmit={handleSubmit(update ? updateCar : save)}>
        <input type={'text'} placeholder={'brand'} {...register('brand')}/>
        <input type={'text'} placeholder={'price'} {...register('price')}/>
        <input type={'text'} placeholder={'year'} {...register('year')}/>

        <button>{update ? 'save' : 'add' }</button>
      </form>
    );
};

export default CarsForm;