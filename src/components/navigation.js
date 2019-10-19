import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import background1 from '../assets/images/background1.jpg';

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
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    margin: 0;
    padding: 0 50px 0 0;

    color: white;

    list-style: none;

    background-image: url(${background1});
    background-size: cover;
    background-attachment: fixed;
    
    z-index: 10;
`;

const Content = styled.div`
position: relative;
    animation-name: ${animation};
    animation-duration: 2s;   
`;

const MenuItem = styled.li`
    margin: 0 20px;
display: inline;
    cursor: pointer;

    user-select: none;
`;

const Navigation = () => (
    <Container>
            <Content>
        <MenuItem>Старт</MenuItem>
        <MenuItem>Обо мне</MenuItem>
        <MenuItem>Навыки</MenuItem>
        <MenuItem>Образование и опыт</MenuItem>
        <MenuItem>Примеры</MenuItem>
        <MenuItem>Контакты</MenuItem>
            </Content>
    </Container>
);

export default Navigation;
