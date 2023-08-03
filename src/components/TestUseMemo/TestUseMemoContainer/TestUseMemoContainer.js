import React, {useState} from 'react';

import TestUseMemo from "../TestUseMemo";

const TestUseMemoContainer = () => {

    const [data, setData] = useState(0)

    return (
        <div>
            <TestUseMemo data={data} setData={setData}/>
        </div>
    );
};

export default TestUseMemoContainer;