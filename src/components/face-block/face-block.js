import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import background from '../../assets/images/background1.jpg';
import Title from './title';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding-left: 20%;

    background-image: url(${background});
    background-size: cover;
    background-attachment: fixed;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Wrapper = styled.div`
    width: fit-content;
    padding: 0 30px;
    overflow: hidden;

    border: 2px solid white;

    background-color: rgb(0, 0, 0, 0.2);

    animation-name: ${fadeIn};
    animation-duration: 2s;
    animation-fill-mode: forwards;
`;

const Gradient = styled.div`
    position: absolute;

    width: 100%;
    height: 400px;

    background: linear-gradient(black, transparent);
`;

const FaceBlock = () => (
    <>
        <Gradient />
        <Container>
            <Wrapper>
                <Title order={1} left={0} leftSpeed={-1}>
                    Middle
                </Title>
                <Title order={2} left={45} leftSpeed={0.2}>
                    Frontend
                </Title>
                <Title order={3} left={20} leftSpeed={-0.3}>
                    Developer
                </Title>
            </Wrapper>
        </Container>
    </>
);

export default FaceBlock;
