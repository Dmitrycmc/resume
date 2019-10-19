import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

const animation = keyframes`
from {
    top: -40px;
}
to {
    top: 0px;
}
`;

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

    animation-name: ${animation};
    animation-duration: 2s;
`;

const MenuItem = styled.li`
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
