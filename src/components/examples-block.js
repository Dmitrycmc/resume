import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components/macro';
import laptop from '../assets/images/laptop.png';

const Container = styled.div`
    position: relative;

    height: 500vh;

    background: linear-gradient(to bottom, #dedede 20%, #161616 80%);
`;

const Slider = styled.div`
    position: sticky;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;

    padding: 70px 0 0 0;
`;

const getRectCss = props =>
    props.imageRect
        ? css`
              top: ${props.imageRect.top + 0.07 * props.imageRect.height}px;
              left: ${props.imageRect.left + 0.17 * props.imageRect.width}px;

              width: ${0.655 * props.imageRect.width}px;
              height: ${0.775 * props.imageRect.height}px;
          `
        : '';

const Content = styled.div`
    position: absolute;

    z-index: -10;
    ${getRectCss}
`;

const StyledImage = styled.img`
    max-width: 80%;
    max-height: 80%;
`;

const ExamplesBlock = () => {
    const [imageRect, setImageRect] = useState(null);

    const imageRef = useRef();
    const onResize = () => {
        setImageRect(imageRef.current.getBoundingClientRect());
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <Container>
            <Slider>
                <StyledImage src={laptop} alt="frame" ref={imageRef} />
                <Content imageRect={imageRect}>sfsdf</Content>
            </Slider>
        </Container>
    );
};

export default ExamplesBlock;
