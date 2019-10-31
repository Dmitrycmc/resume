import React from 'react';
import styled from 'styled-components/macro';
import laptop from '../assets/images/laptop.png';
import { TopGradient } from './gradient';

const Container = styled.div`
    position: relative;

    height: 500vh;

    background-color: #161616;
`;

const Frame = styled.div`
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
    top: 21.5%;
    z-index: -10;

    width: 53%;
    height: 62%;

    background-color: blue;
`;

const ExamplesBlock = () => (
    <Container>
        <TopGradient color="#dedede" height="100%" />
        <Frame>
            <img src={laptop} alt="frame" width="80%" />
            <Content>sfsdf</Content>
        </Frame>
    </Container>
);

export default ExamplesBlock;