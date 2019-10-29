import React, { useState } from 'react';
import Landing from './components/landing';

import src1 from './assets/images/background1.jpg';
import src2 from './assets/images/background2.jpg';
import Loading from './components/loading';

const Root = () => {
    const [remaining, setRemaining] = useState(2);

    const decrementRemaining = () => setRemaining(remaining - 1);

    return remaining ? (
        <div>
            <Loading />
            <div style={{ width: 0, overflow: 'hidden' }}>
                <img src={src1} onLoad={decrementRemaining} alt="" />
                <img src={src2} onLoad={decrementRemaining} alt="" />
            </div>
        </div>
    ) : (
        <Landing />
    );
};

export default Root;
