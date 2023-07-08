import React from 'react';

const Launch = ({lauch}) => {
    const {mission_name, launch_year, links:{mission_patch_small}} = lauch
    return (
        <div>
            <h3>{mission_name}</h3>
            <h4>{launch_year}</h4>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Launch;