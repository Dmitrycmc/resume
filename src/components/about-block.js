import React from 'react';
import styled from 'styled-components/macro';
import background2 from '../assets/images/background2.jpg';
import { TopGradient } from './gradient';

const Container = styled.div`
    position: relative;

    height: 100vh;

    background-image: url(${background2});
    background-size: cover;
`;

const AboutBlock = () => (
    <Container>
        <TopGradient color="white" height="400px" />
        about
    </Container>
);

export default AboutBlock;
