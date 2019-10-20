import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.ul`
    position: fixed;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    margin: 0;
    padding: 0 50px 0 0;

    color: white;

    list-style: none;
`;

const MenuItem = styled.li`
    display: inline;
    margin: 0 20px;

    cursor: pointer;

    user-select: none;
`;

const Navigation = () => (
    <Container>
        <MenuItem>Старт</MenuItem>
        <MenuItem>Обо мне</MenuItem>
        <MenuItem>Навыки</MenuItem>
        <MenuItem>Образование и опыт</MenuItem>
        <MenuItem>Примеры</MenuItem>
        <MenuItem>Контакты</MenuItem>
    </Container>
);

export default Navigation;
