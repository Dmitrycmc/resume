import React from 'react';
import FaceBlock from './face-block/face-block';
import AboutBlock from './about-block';
import Navigation from './navigation';
import styled from 'styled-components/macro';
import { css } from 'styled-components/macro';
import { getFadeInCss } from '../helpers/keyframes';

const fadeInCss = getFadeInCss(
    css`
        top: 100vh;
    `,
    css`
        top: 0;
    `,
    1800,
    500
);

const Container = styled.div`
    position: absolute;

    width: 100%;

    ${fadeInCss}
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
