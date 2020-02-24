import React from 'react';
import styled from 'styled-components/macro';
import background2 from '../../assets/images/background2.jpg';
import Gradient from '../gradient';

const Container = styled.div`
    position: relative;

    display: flex;
    align-items: center;

    height: 100vh;

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

    border-bottom: 2px solid black;

    font-size: 1.6em;
    white-space: nowrap;

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

const AboutBlock = ({ innerRef }) => (
    <Container ref={innerRef}>
        <Gradient color="#dedede" height="100px" direction="bottom" />
        <Article>
            <Line>Имя: Дмитрий</Line>
            <Line>Фамилия: Лытов</Line>
            <Line>Отчество: Андреевич</Line>
            <Line>Год рождения: 1995</Line>
            <Line>Пол: мужской</Line>
            <Line>Город: Москва</Line>
            <Line>З-п ожидания: xxx</Line>
        </Article>
    </Container>
);

export default AboutBlock;
