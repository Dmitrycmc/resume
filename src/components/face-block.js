import React from 'react';
import styled from 'styled-components/macro';
import background1 from '../assets/images/background1.jpg';

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;

    background-image: url(${background1});
    background-size: cover;
    background-attachment: fixed;
`;

const Title = styled.div`
    width: 500px;
    margin: 20%;

    color: white;
    font-size: 5em;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;
`;

const FaceBlock = () => (
    <Container>
        <Title>Middle Frontend Developer</Title>
    </Container>
);

export default FaceBlock;
