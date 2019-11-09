import React from 'react';
import styled from 'styled-components/macro';
import background2 from '../../assets/images/background2.jpg';
import Gradient from '../gradient';

const Container = styled.div`
    position: relative;

    height: 100vh;

    background-image: url(${background2});

    background-position-x: right;
    background-size: cover;

    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.4);
    
    font-family: "Erica Type";
`;

const Line = styled.div`
    font-family: "Erica Type";
    font-size: 45px;
    border-bottom: 2px solid black;
    width: fit-content;
`;

const Article = styled.div`
    margin: auto;
    width: fit-content;
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
        </Article>>
    </Container>
);

export default AboutBlock;
