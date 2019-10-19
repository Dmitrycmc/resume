import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import background1 from '../assets/images/background1.jpg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding-left: 20%;

    background-image: url(${background1});
    background-size: cover;
    background-attachment: fixed;
`;

const animation = keyframes`
    from {
    opacity: 0;
    }
    to {
    opacity: 1;    
    }
`;

const Title = styled.div`
    color: white;
    font-size: 5em;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;

    cursor: default;
    opacity: 0;

    animation-name: ${animation};
    animation-duration: 1s;
    animation-delay: ${props => (props.order - 1) * 500}ms;
    animation-fill-mode: forwards;
`;

const FaceBlock = () => (
    <Container>
        <Title order={1}>Middle</Title>
        <Title order={2}>Frontend</Title>
        <Title order={3}>Developer</Title>
    </Container>
);

export default FaceBlock;
