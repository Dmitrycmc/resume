import React from 'react';
import styled from 'styled-components/macro';
import background2 from '../../assets/images/background2.jpg';
import Gradient from '../gradient';

const Container = styled.div`
    position: relative;

    display: flex;
    align-items: center;

    height: 100vh;
    min-height: 450px;

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

    @media (max-height: 600px) {
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
            <Line>Имя: Дмитрий</Line>
            <Line>Фамилия: Лытов</Line>
            <Line>Отчество: Андреевич</Line>
            <Line>Год рождения: 1995</Line>
            <Line>Пол: мужской</Line>
            <Line>Город: Москва</Line>
            <Line>Образование: бакалавриат&nbsp;МГУ,&nbsp;ВМК (2018г)</Line>
            <Line>Опыт работы:</Line>
            <Line>Iceberg&nbsp;Sport&nbsp;Analytics (Junior&nbsp;frontend&nbsp;dev.) 2018г.</Line>
            <Line>Iceberg&nbsp;Sport&nbsp;Analytics (Lead&nbsp;frontend&nbsp;dev.) 2019&nbsp;-&nbsp;2020г.</Line>
            <Line>З-п ожидания: 200т.р. на руки</Line>
        </Article>
    </Container>
);

export default AboutBlock;
