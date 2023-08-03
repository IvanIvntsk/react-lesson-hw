import React from 'react';

import style from './TestUseToggle.module.css'
import useToggle from "../../hook/useToggle";

const TestUseToggle = () => {

    const [changeValue, toggle] = useToggle(true)

    return (
        <div className={style.main}>
            <p>{changeValue.toString()}</p>
            <button onClick={toggle}>Change False/True</button>
        </div>
    );
};

export default TestUseToggle;