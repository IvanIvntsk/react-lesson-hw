import React, {useContext} from 'react';
import {Context} from "../../App";

const SubChild22 = () => {
    const {setData} = useContext(Context)
    return (
        <div>
            <button onClick={()=>setData(prev=>[...prev, 'World'])}>AddInfo</button>
        </div>
    );
};

export default SubChild22;