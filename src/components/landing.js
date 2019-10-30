import React from 'react';
import FaceBlock from './face-block/face-block';
import AboutBlock from './about-block';
import Navigation from './navigation';
import styled from 'styled-components/macro';
import { getFadeInCss } from '../helpers/keyframes';
import Loading from './loading';

const scenario = {
    FACE_BLOCK_DELAY: 500,
    FACE_BLOCK_FADE_IN: 1800,
    TITLE_DELAY: 1800,
    TITLE_FADE_IN: 500
};

const Container = styled.div`
    position: absolute;

    width: 100%;

    ${getFadeInCss('top: 100vh;', 'top: 0;', scenario.FACE_BLOCK_FADE_IN, scenario.FACE_BLOCK_DELAY)}
`;

const Landing = () => (
    <>
        <Navigation scenario={scenario} />
        <Loading />
        <Container>
            <FaceBlock scenario={scenario} />
            <AboutBlock />
        </Container>
    </>
);

export default Landing;
