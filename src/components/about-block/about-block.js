import React from 'react';
import styled from 'styled-components/macro';
import background2 from '../../assets/images/background2.jpg';
import Gradient from '../gradient';
import localization from '../../utils/localization';

const Container = styled.div`
    position: relative;

    display: flex;
    align-items: center;

    height: 100vh;
    min-height: 500px;

    padding: 30px 0;

    font-family: 'Erica Type', sans-serif;

    background-image: url(${background2});

    background-position-x: right;
    background-size: cover;

    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.4);

    @media (max-width: 800px) {
        background-position-x: center;
    }
`;

const Line = styled.div`
    width: fit-content;
    margin-bottom: 10px;

    font-size: 1.6em;
    text-decoration: underline;

    @media (max-width: 800px) {
        margin-bottom: 5px;

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

const AboutBlock = ({ innerRef }) => (
    <Container ref={innerRef}>
        <Gradient color="#dedede" height="100px" direction="bottom" />
        <Article>
            {localization('about-block-lines').map((line, i) => (
                <Line key={i}>{line}</Line>
            ))}
        </Article>
    </Container>
);

export default AboutBlock;
