import React from 'react';
import styled from 'styled-components/macro';
import laptop from '../assets/images/laptop.png';
import snakeScreen from '../assets/images/snake-screen.png';

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

const Content = styled.div`
    position: absolute;

    z-index: -10;
`;

const FrameImage = styled.img`
width: 100%
`;

const ScreenImage = styled.img`
position: absolute;

top: 7%;
left: 17%;

width: 65.5%;
height: 77.5%;
`;

const Wrapper = styled.div`
    max-width: 80%;
    max-height: 80%;
    position: relative;
`;

const ExamplesBlock = () => (
        <Container>
            <Slider>
                <Wrapper>
                    <FrameImage src={laptop} alt="frame" />
                    <ScreenImage src={snakeScreen} alt="snake screen" />
                </Wrapper>
            </Slider>
        </Container>
    );

export default ExamplesBlock;
