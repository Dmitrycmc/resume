import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
    position: relative;

    z-index: 1000;

    align-self: center;
    width: ${props => props.maxWidth}vw;
    max-width: ${props => props.maxHeight * props.ratio}vh;
    height: ${props => props.maxWidth / props.ratio}vw;
    max-height: ${props => props.maxHeight}vh;
`;

const ConstAspectRatio = ({ ratio = 1, maxWidth = 100, maxHeight = 100, ...props }) => (
    <Wrapper ratio={ratio} maxWidth={maxWidth} maxHeight={maxHeight} {...props} />
);

export default ConstAspectRatio;
