import React from 'react';
import FaceBlock from './face-block';
import AboutBlock from './about-block';
import Navigation from './navigation';
import styled from 'styled-components/macro';

const Container = styled.div`
    width: 100%;
`;

const Landing = () => (
    <Container>
        <Navigation />
        <FaceBlock />
        <AboutBlock />
    </Container>
);

export default Landing;
