import React, {createContext, useState} from 'react';
import CarForm from "./CarsForm/CarForm";
import Cars from "./Cars/Cars";

export const Context = createContext(null)

const CarContainer = () => {
 const [trigger, setTrigger] = useState(null)
 const [CarForUpdate, setCarForUpdate] = useState(null)
    return (
        <Context.Provider value={{
            trigger,
            setTrigger:()=>setTrigger(prev=>!prev),
            CarForUpdate,
            setCarForUpdate
        }}>
            <div>
            <CarForm/>
            <Cars/>
            </div>
        </Context.Provider>
    );
};

export default CarContainer;