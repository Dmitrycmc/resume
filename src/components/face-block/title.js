import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { getFadeInCss } from '../../helpers/keyframes';

const Container = styled.div`
    position: relative;

    width: fit-content;
    margin: 30px;

    color: white;
    font-size: 5em;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;

    cursor: default;
    opacity: 0;

    transition: opacity 1s;

    ${props => getFadeInCss('opacity: 0;', 'opacity: 1;', 1000, props.order * 300 + 3500)}
`;

const Title = props => {
    const [offset, setOffset] = useState(0);

    const onScroll = () => {
        setOffset(window.pageYOffset);
    };

    useEffect(() => {
        document.addEventListener('scroll', onScroll);
        return () => {
            document.removeEventListener('scroll', onScroll);
        };
    }, []);

    return <Container style={{ left: props.left + props.leftSpeed * offset + 'px' }} {...props} />;
};

export default Title;
