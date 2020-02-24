import React from 'react';
import styled from 'styled-components/macro';
import background from '../../assets/images/background1.jpg';
import Title from './title';
import { getFadeInCss } from '../../helpers/keyframes';
import Gradient from '../gradient';

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;

    background-image: url(${background});

    background-position-x: center;
    background-size: cover;
    background-attachment: fixed;
`;

const Wrapper = styled.div`
    width: fit-content;
    padding: 0 30px;
    margin-left: 100px;
    overflow: hidden;

    border-radius: 35px;
    border: 2px solid white;

    background-color: rgb(0, 0, 0, 0.5);

    @media (max-width: 800px) {
        margin: auto;

        border-radius: 15px;
    }

    @media (max-height: 500px) {
        border-radius: 5px;
    }

    ${props => getFadeInCss('opacity: 0;', 'opacity: 1;', props.scenario.TITLE_FADE_IN, props.scenario.TITLE_DELAY)}
`;

const FaceBlock = ({ scenario, innerRef }) => (
    <div style={{ position: 'relative' }} ref={innerRef}>
        <Gradient color="black" height="500px" direction="top" />
        <Container>
            <Wrapper scenario={scenario}>
                <Title order={1}>Middle</Title>
                <Title order={2}>Frontend</Title>
                <Title order={3}>Developer</Title>
            </Wrapper>
        </Container>
    </div>
);

export default FaceBlock;
