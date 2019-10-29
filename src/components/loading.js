import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    color: white;

    font-size: 5em;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;

    background: black;
`;

const Loading = () => <Wrapper>Loading</Wrapper>;

export default Loading;
