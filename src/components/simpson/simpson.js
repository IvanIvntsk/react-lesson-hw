import React from 'react';

const Simpson = (prorps) => {
    let {name, surname, age, gender, photo} = prorps
    return (
        <div className={'simpson'}>
            <h2>{name} {surname} {age} {gender}</h2>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default Simpson;