import React, { useState } from 'react';
import Landing from './components/landing';
import src1 from './assets/images/background1.jpg';
import src2 from './assets/images/background2.jpg';
import Loading from './components/loading';

const sources = [src1, src2];

const Root = () => {
    const [remaining, setRemaining] = useState(sources.length);
    const decrementRemaining = () => setRemaining(remaining - 1);

    return remaining ? (
        <div>
            <Loading />
            <div style={{ width: 0, overflow: 'hidden' }}>
                {sources.map(src => (
                    <img src={src} onLoad={decrementRemaining} alt="" />
                ))}
            </div>
        </div>
    ) : (
        <Landing />
    );
};

export default Root;
