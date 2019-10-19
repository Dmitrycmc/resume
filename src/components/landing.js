import React from 'react';
import background1 from '../assets/images/background1.jpeg';
import styled from 'styled-components/macro';

const Container = styled.div`
    background-image: url(${background1});
    width: 100vw;
    height: 100vh;
    background-size: cover;
`;


const Landing = () => <Container />;

export default Landing;
