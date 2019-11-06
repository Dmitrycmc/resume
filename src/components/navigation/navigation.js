import React, { useEffect, useState, useCallback } from 'react';
import styled, { css } from 'styled-components/macro';
import { getFadeInCss } from '../../helpers/keyframes';

const backgroundCss = css`
    background-color: rgba(23, 25, 28, 0.9);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`;

const Container = styled.ul`
    position: fixed;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    margin: 0;
    padding: 0 50px 0 0;

    color: white;

    list-style: none;

    transition: background-color 0.5s, box-shadow 0.5s;

    z-index: 150;
    ${props => (props.background ? backgroundCss : '')}

    ${props =>
        getFadeInCss('top: -70px;', 'top: 0;', props.scenario.FACE_BLOCK_FADE_IN, props.scenario.FACE_BLOCK_DELAY)}
`;

const MenuItem = styled.li`
    display: inline;
    margin: 0 20px;

    color: ${props => (props.active ? 'gray' : 'white')};

    font-size: 20px;
    font-family: Opensans, sans-serif;
    text-transform: uppercase;

    cursor: pointer;

    transition: color 200ms;

    user-select: none;
`;

const getBackgroundState = () => {
    return !!window.pageYOffset;
};

const getActiveBlockIndex = blocks =>
    blocks.filter(({ ref }) => ref && ref.current && ref.current.getBoundingClientRect().top <= 0).length - 1;

const scrollTo = ref => {
    ref &&
        ref.current &&
        window.scrollTo(
            0,
            ref.current.getBoundingClientRect().top - document.getElementById('root').getBoundingClientRect().top
        );
};

const Navigation = ({ scenario, blocks }) => {
    const [background, setBackground] = useState(getBackgroundState());
    const [highlightedIndex, setHighlightedIndex] = useState(getActiveBlockIndex(blocks));

    const onScroll = () => {
        setBackground(getBackgroundState());
        setHighlightedIndex(getActiveBlockIndex(blocks));
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <Container scenario={scenario} background={background}>
            {/*
            <MenuItem onClick={() => scrollTo(faceRef)}>Старт</MenuItem>
            <MenuItem onClick={() => scrollTo(aboutRef)}>Обо мне</MenuItem>
            <MenuItem>Навыки</MenuItem>
            <MenuItem>Образование и опыт</MenuItem>
            <MenuItem onClick={() => scrollTo(examplesRef)}>Примеры</MenuItem>
            <MenuItem>Контакты</MenuItem>
            */}
            {blocks.map(({ ref, title }, i) => {
                const active = highlightedIndex === i;
                const handleClick = useCallback(() => scrollTo(ref), [ref]);
                return (
                    <MenuItem key={title} onClick={handleClick} active={active}>
                        {title}
                    </MenuItem>
                );
            })}
        </Container>
    );
};

export default Navigation;
