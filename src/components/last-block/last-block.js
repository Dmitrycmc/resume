import React from 'react';
import styled from 'styled-components/macro';
import Gradient from '../gradient';
import background from "../../assets/images/background3.jpeg";

const Container = styled.div`
    position: relative;

    display: flex;
    align-items: center;

    height: 100vh;

    font-family: 'Erica Type', sans-serif;

    background-image: url(${background});

    background-position-x: right;
    background-size: cover;

    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.4);

    @media (max-width: 800px) {
        background-position-x: center;
    }
`;

const Line = styled.div`
    width: fit-content;

    font-size: 1.6em;
    white-space: nowrap;
color: white;

    @media (max-width: 800px) {
        margin: 20px 0;

        font-size: 2em;
    }

    @media (max-height: 500px) {
        font-size: 1.2em;
    }
`;

const Article = styled.div`
    width: fit-content;
    margin-left: 100px;
    @media (max-width: 800px) {
        margin-left: 30px;
    }
`;

const LastBlock = ({ innerRef }) => (
    <Container ref={innerRef}>
        <Gradient color="#161616" height="100px" direction="top" />
        <Article>
            <Line>Трудолюбивый, ответственный, инициативный.</Line>
            <Line>Языки программирования: C, C#, C++, JS</Line>
            <Line>Для своих проектов писал backend на node.js</Line>
            <Line>Система контроля версий: git</Line>
        </Article>
    </Container>
);

export default LastBlock;
