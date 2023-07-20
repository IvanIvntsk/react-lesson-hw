import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {carServices} from "../../../services/CarServices";
import {Context} from "../CarContainer";

const CarForm = () => {
    const {register, reset,handleSubmit, setValue} = useForm()
    const [errors, setErrors] = useState(null)
    const {setTrigger, CarForUpdate, setCarForUpdate} = useContext(Context)

    if (CarForUpdate){
        setValue('brand',CarForUpdate.brand)
        setValue('price',CarForUpdate.price)
        setValue('year',CarForUpdate.year)
    }

    const add = async (car) => {
        try {
            await carServices.create(car)
            setErrors(null)
            reset()
            setTrigger()
        } catch (e) {
            setErrors(e.response.data)
        }
    }
        const update = async (car) => {
            try {
                await carServices.updateById(CarForUpdate.id, car)
                reset()
                setErrors(null)
                setCarForUpdate(null)
                setTrigger()
            } catch (e) {
                setErrors(e.response.data)
            }
        }
    return (
        <form style={{display: "flex", border: "1px black solid", borderRadius:"10px",justifyContent:"space-around"}}
              onSubmit={handleSubmit(!CarForUpdate?add:update)}>

            <label><input type={"text"} placeholder={'brand'} {...register('brand',{})}/></label>
            {errors&&JSON.stringify(errors)}
            <label><input type={"text"} placeholder={'price'} {...register('price')}/></label>
            {errors&&JSON.stringify(errors)}
            <label><input type={"text"} placeholder={'year'} {...register('year')}/></label>

            <button style={{borderRadius:"10px", borderStyle:"none", color:"red", backgroundColor:"black", fontSize:"20px"}
            }>{!CarForUpdate?'add':'update'}</button>
        </form>
    );
};

export default CarForm;