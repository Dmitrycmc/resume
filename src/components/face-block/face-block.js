import React from 'react';
import styled from 'styled-components/macro';
import background from '../../assets/images/background1.jpg';
import Title from './title';
import { getFadeInCss } from '../../helpers/keyframes';
import { BottomGradient, TopGradient } from '../gradient';

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

const Wrapper = styled.div`
    width: fit-content;
    padding: 0 30px;
    overflow: hidden;

    border: 2px solid white;

    background-color: rgb(0, 0, 0, 0.2);

    ${getFadeInCss('opacity: 0;', 'opacity: 1;', 1800, 500)}
`;

const FaceBlock = () => (
    <div style={{ position: 'relative' }}>
        <TopGradient color="black" height="500px" />
        <BottomGradient color="white" height="100px" />
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
    </div>
);

export default FaceBlock;
