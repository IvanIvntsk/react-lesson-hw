import React from 'react';

const Album = ({album}) => {
    const {id, title} = album
    return (
        <div>
            <h3>id:{id}</h3>
            <div>Title:{title}</div>
        </div>
    );
};

export default Album;