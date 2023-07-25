import React, {useEffect, useState} from 'react';
import {todoServices} from "../../services/todoServices/todoServices";
import Todo from "./Todo/Todo";

const ToDos = () => {
   const [todos, setTodos] = useState([])

    useEffect(()=>{
        todoServices.getAll()
            .then(({data})=>setTodos(data))
    },[])
    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default ToDos;