import React from 'react';

import useArray from "../../hooks/useArray";
import style from './TestUseArray.module.css'
const TestUseArray = () => {

    const {array, removeItem, addItem} = useArray([])

    return (
        <div className={style.array}>
            <button onClick={()=>addItem('NewItem')}>AddItem</button>
            {array.map((item,index)=> (
                <div key={index}>
                  <i className={style.text}>{item}</i>
                    <button onClick={() => removeItem(index)}>RemoveItem</button>
                    </div>
                ))}
        </div>
    );
};

export default TestUseArray;