import React from 'react';
import Simpson from "./components/simpson/simpson";

const App = () => {
    return (
        <div>
         <Simpson name={'Bart'} surname={'Simpson'} age={10} gender={'male'}
                  photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>
         <Simpson name={'Homer'} surname={'Simpson'} age={36} gender={'male'}
                  phtot={'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'}/>
         <Simpson name={'Marge'} surname={'Simpson'} age={37} gender={'female'}
                  photo={'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'}/>
         <Simpson name={'Lissa'} surname={'Simpson'} age={8} gender={'female'}
                  photo={'https://upload.wikimedia.org/wikipedia/uk/a/ae/Lisasmiling.png'}/>
         <Simpson name={'Maggie'} surname={'Simpson'} age={1} gender={'female'}
                  photo={'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'}/>

        </div>
    );
};

export default App;