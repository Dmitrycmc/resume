import React from 'react';
import styled from 'styled-components';
import ReactIcon from '../../assets/icons/react';
import { getFadeInCss } from '../../helpers/keyframes';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    color: white;

    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;

    background: black;

    user-select: none;
`;

const Title = styled.div`
    position: relative;
    ${props => `left: ${props.right ? '-' : ''}50px`}

    font-size: 5em;
    white-space: nowrap;

    overflow: hidden;
    display: flex;
    justify-content: ${props => (props.right ? 'flex-end' : 'flex-start')};

    @media (max-width: 800px) {
        font-size: 1.3em;
    }

    @media (max-height: 500px) {
        font-size: 2.5em;
    }

    ${props =>
        getFadeInCss(
            'width: 0;',
            'width: ' + props.width,
            props.scenario.LOADING_FADE_IN,
            props.scenario.LOADING_DELAY
        )}
`;

const Edge = styled.div`
    z-index: 10;

    width: 50px;
    height: 1em;

    ${props => `background: linear-gradient(to ${props.right ? 'right' : 'left'}, black, transparent)`}
`;

const IntroBlock = ({ scenario }) => (
    <Wrapper>
        <Title width="570px" scenario={scenario}>
            made with
        </Title>
        <Edge />
        <ReactIcon width="200" />
        <Edge right />
        <Title right width="350px" scenario={scenario}>
            react
        </Title>
    </Wrapper>
);

export default IntroBlock;
