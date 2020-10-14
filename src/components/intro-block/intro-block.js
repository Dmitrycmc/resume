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
    font-size: 3em;
    white-space: nowrap;

    z-index: 50;

    overflow: hidden;
    display: flex;
    justify-content: ${props => (props.right ? 'flex-end' : 'flex-start')};

    @media (max-width: 830px) {
        font-size: 1.3em;
    }

    @media (max-width: 430px) {
        font-size: 0.7em;
    }

    ${props =>
        getFadeInCss(
            'width: 0;',
            `
                width: ${props.width};
            `,
            props.scenario.LOADING_FADE_IN,
            props.scenario.LOADING_DELAY
        )}
`;

const Edge = styled.div`
    z-index: 100;

    margin: 0 -5px;
    width: 50px;
    height: 150px;

    ${props => `background: linear-gradient(to ${props.right ? 'right' : 'left'}, black, transparent)`}
`;

const IntroBlock = ({ scenario }) => (
    <Wrapper>
        <Title width="380px" scenario={scenario}>
            made with
        </Title>
        <Edge />
        <ReactIcon
            style={{
                background: 'black',
                zIndex: 100
            }}
            width="200"
        />
        <Edge right />
        <Title right width="260px" scenario={scenario}>
            react
        </Title>
    </Wrapper>
);

export default IntroBlock;
