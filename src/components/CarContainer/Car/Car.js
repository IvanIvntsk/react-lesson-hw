import React, {useContext} from 'react';
import {Context} from "../CarContainer";
import {carServices} from "../../../services/CarServices";

const Car = ({car}) => {

    const {setCarForUpdate, setTrigger} = useContext(Context)

    const{id, brand, price, year} = car

    const carDelete = async () => {
        await carServices.deleteById(id)
        setTrigger()
    }

    return (
        <div style={{display:"flex", justifyContent:"space-around",margin: "10px", backgroundColor:"whitesmoke"}}>
            <div>Id:{id}</div>
            <div>Brand:{brand}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <button onClick={carDelete}>Delete</button>
        </div>
    );
};

export default Car;