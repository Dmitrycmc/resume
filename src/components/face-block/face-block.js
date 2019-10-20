import React from 'react';
import styled from 'styled-components/macro';
import background1 from '../../assets/images/background1.jpg';
import Title from './title';

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

const FaceBlock = () => (
    <Container>
        <Title order={1} left={-30} leftSpeed={-1}>
            Middle
        </Title>
        <Title order={2} left={0} leftSpeed={0.2}>
            Frontend
        </Title>
        <Title order={3} left={30} leftSpeed={-0.3}>
            Developer
        </Title>
    </Container>
);

export default FaceBlock;
