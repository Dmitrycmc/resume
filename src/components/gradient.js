import styled from 'styled-components/macro';

const Gradient = styled.div`
    position: absolute;

    width: 100%;
    height: ${props => props.height};

    ${props => `
        background: linear-gradient(to ${props.direction}, transparent, ${props.color});
        ${props.direction}: 0;
    `}
`;

export default Gradient;
