import React, {useEffect, useState} from 'react';
import launch from "./Launch";
import Launch from "./Launch";

const Launches = () => {
    const [launches, setLaucnhes] = useState([])

    useEffect(() =>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                const filter = value.filter(item => item.launch_year !== '2020');
                setLaucnhes(filter)
            })
            .catch()
    },[])
    return (
        <div>
            {launches.map(launch=><Launch key={launch.launch_date_unix} lauch={launch}/>)}
        </div>
    );
};

export default Launches;