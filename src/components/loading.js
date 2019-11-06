import React from 'react';
import styled from 'styled-components';
import reactIcon from '../assets/images/react.svg';
import { getFadeInCss } from '../helpers/keyframes';

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

    user-select: none;
`;

const Title = styled.div`
    width: 0;
    width: 50px;

    white-space: nowrap;

    overflow: hidden;
    display: flex;
    justify-content: ${props => (props.right ? 'flex-end' : 'flex-start')};

    ${props =>
        getFadeInCss(
            'width: 0;',
            'width: ' + props.width,
            props.scenario.LOADING_FADE_IN,
            props.scenario.LOADING_DELAY
        )}
`;

const Loading = ({ scenario }) => (
    <Wrapper>
        <Title width="520px" scenario={scenario}>
            made with
        </Title>
        <img src={reactIcon} alt="" />
        <Title right width="320px" scenario={scenario}>
            react
        </Title>
    </Wrapper>
);

export default Loading;
