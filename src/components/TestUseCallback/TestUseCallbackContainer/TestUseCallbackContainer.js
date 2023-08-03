import React, {memo, useState} from 'react';
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
            {calculationFun}
        </div>
    );
};

export default memo(TestUseCallbackContainer);