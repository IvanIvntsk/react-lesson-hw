import React, {memo, useCallback, useMemo} from 'react';

const TestUseCallback = ({data, setData, todo, setTodo}) => {

    const addTodo = () => {
        setTodo(prev => [...prev, 'New todo'])
    }

    const  calculation = (data) => {
        for (let i = 0; i < 99999; i++) {
            data++;
        }
        return data;
    }
        const calculationMemo = useCallback(()=> {
            return calculation(data)
        }, [data])

    return (
        <div>
            {todo.map((todo, index)=> <p>{todo} №{index}</p>)}
            <button onClick={addTodo}>Add todo</button>
            <hr/>

        </div>
    );
};

export default memo(TestUseCallback);