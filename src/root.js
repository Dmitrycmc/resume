import React, { useState } from 'react';
import Landing from './components/landing';
import src1 from './assets/images/background1.jpg';
import src2 from './assets/images/background2.jpg';
import src3 from './assets/images/background3.jpeg';
import src4 from './assets/images/laptop.png';
import src5 from './assets/examples/snake-game/screen.png';
import src6 from './assets/examples/resume/screen.png';
import src7 from './assets/examples/chart/screen.png';
import src8 from './assets/examples/flight-table/screen.png';
import src9 from './assets/examples/work-tracker/screen.png';

const sources = [src1, src2, src3, src4, src5, src6, src7, src8, src9];

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
