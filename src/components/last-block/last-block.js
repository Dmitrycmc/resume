import React from 'react';
import styled from 'styled-components/macro';
import Gradient from '../gradient';
import background from '../../assets/images/background3.jpeg';
import localization from '../../utils/localization';

const Container = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    height: 100vh;
    min-height: 400px;

    padding: 30px 0;

    font-family: 'Erica Type', sans-serif;

    background-image: url(${background});

    background-position-x: right;
    background-size: cover;

    @media (max-width: 800px) {
        background-position-x: center;
    }
`;

const Line = styled.div`
    max-width: 700px;
    margin-bottom: 15px;

    color: white;
    font-size: 1.6em;

    @media (max-width: 800px) {
        margin: 20px 0;

        font-size: 1.2em;
    }
`;

const Article = styled.div`
    width: fit-content;
    margin-left: 100px;
    @media (max-width: 800px) {
        margin: 0 30px;
    }
`;

const LastBlock = ({ innerRef }) => (
    <Container ref={innerRef}>
        <Gradient color="#161616" height="100px" direction="top" />
        <Article>
            {localization('last-block-lines').map((line, i) => (
                <Line key={i}>{line}</Line>
            ))}
        </Article>
    </Container>
);

export default LastBlock;
