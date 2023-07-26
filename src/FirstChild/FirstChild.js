import React from 'react';

import SubChild11 from "./SubChild1.1/SubChild1.1";
import SubChild12 from "./SubChild1.2/SubChild1.2";

const FirstChild = () => {
    return (
        <div>
            <SubChild11/>
            <SubChild12/>
        </div>
    );
};

export default FirstChild;