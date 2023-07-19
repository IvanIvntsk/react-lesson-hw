import React, {useContext} from 'react';
import {Context} from "../CarContainer";

const Car = ({car}) => {

    const {setCarForUpdate} = useContext(Context)

    const{id, brand, price, year} = car
    return (
        <div>
            <div>Id:{id}</div>
            <div>Brand:{brand}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <button>Delete</button>
        </div>
    );
};

export default Car;