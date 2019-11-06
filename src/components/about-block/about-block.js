import React from 'react';
import styled from 'styled-components/macro';
import background2 from '../../assets/images/background2.jpg';
import Gradient from '../gradient';

const Container = styled.div`
    position: relative;

    height: 100vh;

    background-image: url(${background2});

    background-position-x: right;
    background-size: cover;

    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.4);
`;

const AboutBlock = () => (
    <Container>
        <Gradient color="#dedede" height="100px" direction="bottom" />
        about
    </Container>
);

export default AboutBlock;
