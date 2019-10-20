import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
    position: relative;
    left: ${props => props.left}px;

    width: fit-content;

    color: white;
    font-size: 5em;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;

    cursor: default;
    opacity: 0;

    transition: opacity 1s;
`;

const Title = props => {
    const ref = useRef();

    const show = () => (ref.current.style.opacity = 1);

    const onScroll = () => {
        ref.current.style.left = props.left + props.leftSpeed * window.pageYOffset + 'px';
    };

    useEffect(() => {
        setTimeout(show, props.order * 500);
        document.addEventListener('scroll', onScroll);
        return () => {
            document.removeEventListener('scroll', onScroll);
        };
    }, []);

    return <Container ref={ref} {...props} />;
};

export default Title;
