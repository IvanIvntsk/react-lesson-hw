import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = ({setCars}) => {
   const {register,reset,handleSubmit} = useForm()
    const Add = (car) =>{
       fetch('http://owu.linkpc.net/carsAPI/v1/cars',{
           headers:{'Content-type':'application/json'},
           method:'POST',
           body:JSON.stringify(car)
       })
           .then(value => value.json())
           .then(value => {
               setCars(prev => [...prev, value])
               reset()
           })
    }
    return (
        <form onSubmit={handleSubmit(Add)}>

            <label><input type={"text"} placeholder={'brand'} {...register('brand')}/></label>
            <label><input type={"text"} placeholder={'price'} {...register('price')}/></label>
            <label><input type={"text"} placeholder={'year'} {...register('year')}/></label>

            <button>ADD</button>
        </form>
    );
};

export default CarForm;
