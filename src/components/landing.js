import React, { useRef } from 'react';
import FaceBlock from './face-block/face-block';
import AboutBlock from './about-block/about-block';
import Navigation from './navigation/navigation';
import styled from 'styled-components/macro';
import { getFadeInCss } from '../helpers/keyframes';
import IntroBlock from './intro-block/intro-block';
import ExamplesBlock from './examples-block/examples-block';
import background from '../assets/images/background3.jpeg';
import snakeScreen from '../assets/images/snake-screen.png';
import Gradient from './gradient';

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

const LastBlock = styled.div`
    position: relative;

    height: 100vh;

    background-color: #161616;
    background-image: url(${background});
    background-size: cover;
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
                    { ref: faceRef, title: 'старт' },
                    { ref: aboutRef, title: 'обо мне' },
                    { ref: examplesRef, title: 'примеры' },
                    { ref: lastRef, title: 'конец' }
                ]}
            />
            <IntroBlock scenario={scenario} />
            <Container>
                <FaceBlock scenario={scenario} innerRef={faceRef} />
                <AboutBlock innerRef={aboutRef} />
                <ExamplesBlock
                    innerRef={examplesRef}
                    images={[snakeScreen]}
                    titles={['Змейка']}
                    captions={['canvas']}
                />
                <LastBlock ref={lastRef}>
                    <Gradient color="#161616" height="100px" direction="top" />
                </LastBlock>
            </Container>
        </>
    );
};

export default Landing;