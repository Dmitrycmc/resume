import React from 'react';
import ConstAspectRatio from '../const-aspect-ratio';
import laptop from '../../assets/images/laptop.png';
import styled from 'styled-components/macro';

const ScreenFrame = styled.img`
    width: 100%;
`;

const ScreenContent = styled.div`
    position: absolute;
    top: 6.8%;
    right: 17.4%;
    bottom: 15.8%;
    left: 17.02%;
    z-index: -5;

    background-image: url(${props => props.image});
    background-size: cover;
`;
const Laptop = ({ maxWidth, maxHeight, children, image }) => (
    <ConstAspectRatio ratio={24 / 13} maxWidth={maxWidth} maxHeight={maxHeight}>
        <ScreenFrame src={laptop} alt="frame" />
        <ScreenContent children={children} image={image} />
    </ConstAspectRatio>
);

export default Laptop;
