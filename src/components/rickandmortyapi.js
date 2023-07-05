import React from 'react';
import './rickandStyle.css'

const Rickandmortyapi = (props) => {
    let {id,name,status,species,gender,image} = props;
    return (
        <div className={'main'}>
            <h3>{id} {name}</h3>
            <p>{status} {species} </p>
            <p>{gender}</p>
            <img src={image} alt={''}/>
        </div>
    );
};

export default Rickandmortyapi;
// id,name,status,species,gender,image