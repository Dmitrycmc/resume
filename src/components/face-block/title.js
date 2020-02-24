import styled from 'styled-components/macro';
import { getFadeInCss } from '../../helpers/keyframes';

const Title = styled.div`
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

    @media (max-width: 800px) {
        margin: 15px;

        font-size: 2em;
    }

    @media (max-height: 500px) {
        margin: 5px 15px;

        font-size: 1.5em;
    }

    ${props => getFadeInCss('opacity: 0;', 'opacity: 1;', 1000, props.order * 300 + 3500)}
`;

export default Title;
