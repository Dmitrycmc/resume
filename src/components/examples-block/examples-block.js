import React from 'react';
import styled from 'styled-components/macro';
import snakeScreen from '../../assets/images/snake-screen.png';
import Laptop from './laptop';

const Container = styled.div`
    position: relative;

    height: 500vh;

    background: linear-gradient(to bottom, #dedede 20%, #161616 80%);
`;

const Slider = styled.div`
    position: sticky;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;

    padding: 70px 0 0 0;
`;

const ExamplesBlock = () => (
    <Container>
        <Slider>
            <Laptop maxWidth={80} maxHeight={70}>
                <img src={snakeScreen} width="100%" alt="snake screen" />
            </Laptop>
        </Slider>
    </Container>
);

export default ExamplesBlock;
