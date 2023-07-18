import React from 'react';

const Car = ({car}) => {
    const {id, brand, price, year} = car
    return (
        <div>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
        </div>
    );
};

export default Car;