import React from 'react';
import FaceBlock from './face-block/face-block';
import AboutBlock from './about-block';
import Navigation from './navigation';
import styled from 'styled-components/macro';
import { getFadeInCss } from '../helpers/keyframes';
import Loading from './loading';

const Container = styled.div`
    position: absolute;

    width: 100%;

    ${getFadeInCss('top: 100vh;', 'top: 0;', 1800, 500)}
`;

const Landing = () => (
    <>
        <Navigation />
        <Loading />
        <Container>
            <FaceBlock />
            <AboutBlock />
        </Container>
    </>
);

export default Landing;
