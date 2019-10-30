import styled from 'styled-components/macro';

export const TopGradient = styled.div`
    position: absolute;

    top: 0;

    width: 100%;
    height: ${props => props.height};

    background: linear-gradient(${props => props.color}, transparent);
`;

export const BottomGradient = styled.div`
    position: absolute;

    bottom: 0;

    width: 100%;
    height: ${props => props.height};

    background: linear-gradient(transparent, ${props => props.color});
`;
