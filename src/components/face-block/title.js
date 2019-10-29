import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
    position: relative;

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
    const [offset, setOffset] = useState(0);
    const [visible, setVisible] = useState(false);

    const show = () => setVisible(true);

    const onScroll = () => {
        setOffset(window.pageYOffset);
    };

    useEffect(() => {
        setTimeout(show, props.order * 500);
        document.addEventListener('scroll', onScroll);
        return () => {
            document.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <Container
            style={{ left: props.left + props.leftSpeed * offset + 'px', opacity: visible ? 1 : 0 }}
            {...props}
        />
    );
};

export default Title;
