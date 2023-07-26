import React, {createContext, useState} from 'react';

import FirstChild from "./FirstChild/FirstChild";
import SecondChild from "./SecondChild/SecondChild";

export const Context = createContext(null)
       const [data, setData] = useState(['Hello World'])
const App = () => {
    return (
        <Context.Provider value={{data, setData}}>
        <div>
            <FirstChild/>
            <hr/>
            <SecondChild/>
        </div>
        </Context.Provider>

    );
};

export default App;