import React, {createContext, useState} from 'react';
import CommentForm from "./CommentForm/CommentForm";
import UseForm from "./UseForm/UseForm";

export const Context = createContext(null)


const Form = () => {
    const [trigger, setTrigger] = useState(null)
    return (

        <Context.Provider value={{
            trigger,
            setTrigger:()=>setTrigger(prev=>!prev)
        }}>
        <div>
            <CommentForm/>
            <hr/>
            <UseForm/>
        </div>
        </Context.Provider>
    );
};

export default Form;