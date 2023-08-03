import React, {useState} from 'react';
import TestUseCallback from "../TestUseCallback";

const TestUseCallbackContainer = ({calculationFun}) => {
    const [data, setData] = useState(0)
    const [todo, setTodo] = useState(['New Todo'])

    return (
        <div>
           <TestUseCallback
               data={data}
               setData={setData}
               todo={todo}
               setTodo={setTodo}
           />
            <button onClick={calculationFun}></button>
        </div>
    );
};

export default TestUseCallbackContainer;