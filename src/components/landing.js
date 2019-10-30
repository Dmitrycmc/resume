import React from 'react';
import FaceBlock from './face-block/face-block';
import AboutBlock from './about-block';
import Navigation from './navigation';
import styled from 'styled-components/macro';
import { keyframes } from 'styled-components/macro';

const fadeIn = keyframes`
    to {
        top: 0;
    }
`;

const Container = styled.div`
    position: absolute;
    top: 100vh;

    width: 100%;

    animation-name: ${fadeIn};
    animation-duration: 1800ms;
    animation-delay: 500ms;
    animation-fill-mode: forwards;
`;

const Landing = () => (
    <>
        <Navigation />
        <Container>
            <FaceBlock />
            <AboutBlock />
        </Container>
    </>
);

export default Landing;
