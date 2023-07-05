import React from 'react';
import Rickandmortyapi from "./components/rickandmortyapi";

const App = () => {
    return (
        <div>
            <Rickandmortyapi id={1} name={'Rick Sanchez'} status={'Alive'} species={'Human'} gender={'Male'}
                             image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
            <Rickandmortyapi id={2} name={'Morty Smith'} status={'Alive'} species={'Human'} gender={'Male'}
                             img={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
            <Rickandmortyapi id={3} name={'Summer Smith'} status={'Alive'} species={'Human'} gender={'Female'}
                             img={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
            <Rickandmortyapi id={4} name={'Beth Smith'} status={'Alive'} species={'Human'} gender={'Female'}
                             img={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
            <Rickandmortyapi id={5} name={'Jerry Smith'} status={'Alive'} species={'Human'} gender={'Male'}
                             img={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>
            <Rickandmortyapi id={6} name={'Abadango Cluster Princess'} status={'Alive'} species={'Alien'} gender={'Female'}
                             image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>
        </div>
    );
};

export default App;