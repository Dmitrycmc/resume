import React, { useState } from 'react';
import Landing from './components/landing';
import src1 from './assets/images/background1.jpg';
import src2 from './assets/images/background2.jpg';
import src3 from './assets/images/background3.jpeg';
import src4 from './assets/images/react.svg';
import src5 from './assets/images/laptop.png';
import src6 from './assets/images/snake-screen.png';

const sources = [src1, src2, src3, src4, src5, src6];

const Root = () => {
    const [remaining, setRemaining] = useState(sources.length);
    const decrementRemaining = () => setRemaining(remaining - 1);

    return remaining ? (
        <div>
            <div style={{ width: 0, overflow: 'hidden' }}>
                {sources.map((src, i) => (
                    <img key={i} src={src} onLoad={decrementRemaining} alt="" />
                ))}
            </div>
        </div>
    ) : (
        <Landing />
    );
};

export default Root;