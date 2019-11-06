import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import snakeScreen from '../../assets/images/snake-screen.png';
import bg1 from '../../assets/images/background1.jpg';
import bg2 from '../../assets/images/background2.jpg';
import bg3 from '../../assets/images/background3.jpeg';
import Laptop from './laptop';

const Container = styled.div`
    position: relative;

    height: 500vh;

    background: linear-gradient(to bottom, #dedede 20%, #161616 80%);
`;

const Slider = styled.div`
    position: sticky;
    top: 0;

    display: grid;
    grid-template-rows: 1fr auto 1fr;
    justify-content: center;

    box-sizing: border-box;
    width: 100%;
    height: 100vh;

    padding: 70px 0 0 0;
`;

const Description = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ExamplesBlock = ({ innerRef, images = [snakeScreen, bg1, bg2, bg3] }) => {
    const [exampleIndex, setExampleIndex] = useState(0);

    const onScroll = () => {
        if (innerRef && innerRef.current) {
            const rect = innerRef.current.getBoundingClientRect();
            const progress = (window.innerHeight - rect.top) / (rect.height + window.innerHeight);
            const imageIndex = Math.floor(progress * images.length);
            setExampleIndex(imageIndex);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <Container ref={innerRef}>
            <Slider>
                <Description>{['1', '2', '3', '4'][exampleIndex]}</Description>
                <Laptop maxWidth={80} maxHeight={50} image={images[exampleIndex]} />
                <Description>{['1', '2', '3', '4'][exampleIndex]}</Description>
            </Slider>
        </Container>
    );
};

export default ExamplesBlock;
