import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carsThunks} from "../../../redux/actions/CarsActions";

const CarsForm = () => {
    const dispatch = useDispatch()
    const {update} = useSelector(state => state.cars)
    const {register,reset,setValue,handleSubmit} = useForm()

    const save =  (car) => {
        dispatch(carsThunks.create(car))
        reset()
    }
    // const updateCar = (data) => {
    // data = {...data, id: }
    //     dispatch()
    // }

    return (
      <form onSubmit={handleSubmit(save)}>
        <input type={'text'} placeholder={'brand'} {...register('brand')}/>
        <input type={'text'} placeholder={'price'} {...register('price')}/>
        <input type={'text'} placeholder={'year'} {...register('year')}/>

        <button>ADD</button>
      </form>
    );
};

export default CarsForm;