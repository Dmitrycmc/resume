import React, { useRef } from 'react';
import FaceBlock from './face-block/face-block';
import AboutBlock from './about-block/about-block';
import Navigation from './navigation/navigation';
import styled from 'styled-components/macro';
import { getFadeInCss } from '../helpers/keyframes';
import IntroBlock from './intro-block/intro-block';
import ExamplesBlock from './examples-block/examples-block';
import HomeIcon from '../assets/icons/home';
import LastBlock from './last-block/last-block';

const scenario = {
    LOADING_DELAY: 500,
    LOADING_FADE_IN: 1000,
    FACE_BLOCK_DELAY: 2000,
    FACE_BLOCK_FADE_IN: 1500,
    TITLE_DELAY: 3500,
    TITLE_FADE_IN: 500
};

const Container = styled.div`
    position: absolute;

    width: 100%;

    z-index: 100;
    ${getFadeInCss('top: 100vh;', 'top: 0;', scenario.FACE_BLOCK_FADE_IN, scenario.FACE_BLOCK_DELAY)}
`;

const Landing = () => {
    const faceRef = useRef();
    const aboutRef = useRef();
    const examplesRef = useRef();
    const lastRef = useRef();

    return (
        <>
            <Navigation
                scenario={scenario}
                blocks={[
                    { ref: faceRef, title: <HomeIcon /> },
                    { ref: aboutRef, title: 'О себе' },
                    { ref: examplesRef, title: 'Примеры работ' },
                    { ref: lastRef, title: 'Характеристика' }
                ]}
            />
            <IntroBlock scenario={scenario} />
            <Container>
                <FaceBlock scenario={scenario} innerRef={faceRef} />
                <AboutBlock innerRef={aboutRef} />
                <ExamplesBlock innerRef={examplesRef} />
                <LastBlock innerRef={lastRef} />
            </Container>
        </>
    );
};

export default Landing;
