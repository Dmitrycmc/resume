import React from 'react';
import styled from 'styled-components/macro';
import background2 from '../../assets/images/background2.jpg';
import Gradient from '../gradient';

const Container = styled.div`
    position: relative;

    height: 100vh;

    font-size: 45px;
    font-family: 'Erica Type', sans-serif;

    background-image: url(${background2});

    background-position-x: right;
    background-size: cover;

    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.4);
`;

const Line = styled.div`
    width: fit-content;

    border-bottom: 2px solid black;
`;

const Article = styled.div`
    width: fit-content;
    margin: auto;
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
            <Line>Семейное положение: холост</Line>
            <Line>Зарплатные ожидания: xxx</Line>
        </Article>
    </Container>
);

export default AboutBlock;
