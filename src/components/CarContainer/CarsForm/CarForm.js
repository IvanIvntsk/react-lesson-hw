import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import {carServices} from "../../../services/CarServices";
import {Context} from "../CarContainer";

const CarForm = () => {
    const {register, reset,handleSubmit, setValue} = useForm()
    const [errors, setErrors] = useState(null)
    const {setTrigger, CarForUpdate, setCarForUpdate} = useContext(Context)

    if (CarForUpdate)
        setValue('', CarForUpdate.brand)
    const add = async (car) => {
        try {
            await carServices.create(car)
            setErrors(null)
            reset()
            setTrigger()
            setCarForUpdate(null)
        }catch (e) {
            setErrors(e.response.data)
        }
        const update = async (car) => {
            try {
                await carServices.updateById(CarForUpdate.id, car)
                reset()
                setErrors(null)
            } catch (e) {
                setErrors(e.response.data)
            }
        }
    }
    return (

        <form onSubmit={handleSubmit(add)}>
            <label><input type={"text"} placeholder={'brand'} {...register('brand')}/></label>
            {errors&&JSON.stringify(errors)}
            <label><input type={"text"} placeholder={'price'} {...register('price')}/></label>
            {errors&&JSON.stringify(errors)}
            <label><input type={"text"} placeholder={'year'} {...register('year')}/></label>

            <button>{!CarForUpdate?'add':'update'}</button>
        </form>
    );
};

export default CarForm;