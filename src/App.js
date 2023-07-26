import React, {createContext, useState} from 'react';

import FirstChild from "./FirstChild/FirstChild";
import SecondChild from "./SecondChild/SecondChild";

export const Context = createContext(null)

const App = () => {
    const [data, setData] = useState(['Hello'])
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