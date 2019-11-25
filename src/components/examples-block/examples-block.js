import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Laptop from './laptop';

import snakeScreen from '../../assets/examples/snake-game/screen.png';
import chartScreen from '../../assets/examples/chart/screen.png';
import resumeScreen from '../../assets/examples/resume/screen.png';
import tableScreen from '../../assets/examples/flight-table/screen.png';
import trackerScreen from '../../assets/examples/work-tracker/screen.png';

import { source as snakeSource, deploy as snakeDeploy } from '../../assets/examples/snake-game/screen.png';
import { source as chartSource, deploy as chartDeploy } from '../../assets/examples/chart/screen.png';
import { source as resumeSource, deploy as resumeDeploy } from '../../assets/examples/resume/screen.png';
import { source as tableSource, deploy as tableDeploy } from '../../assets/examples/resume/screen.png';
import { source as trackerSource, deploy as trackerDeploy } from '../../assets/examples/work-tracker/screen.png';

import JsIcon from '../../assets/icons/js';
import SvgIcon from '../../assets/icons/svg';
import ReactIcon from '../../assets/icons/react';

const examples = [
    {
        title: <ReactIcon style={{ color: '#53C1DE' }} />,
        imageSrc: resumeScreen,
        caption: 'Resume'
    },
    {
        title: <JsIcon/>,
        imageSrc: tableScreen,
        caption: 'Flight table'
    },
    {
        title: <ReactIcon style={{ color: '#53C1DE' }} />,
        imageSrc: trackerScreen,
        caption: 'Work tracker'
    },
    {
        title: <><JsIcon/><SvgIcon/></>,
        imageSrc: snakeScreen,
        caption: 'Snake'
    },
    {
        title: <><JsIcon /><SvgIcon />></>,
        imageSrc: chartScreen,
        caption: 'Chart'
    }
];

const Container = styled.div`
    position: relative;

    height: 500vh;

    background: linear-gradient(to bottom, #dedede 20%, #161616 80%);
`;

const StickyWrapper = styled.div`
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
    display: grid;
    grid-auto-columns: 100%;
    grid-auto-flow: column;
    overflow: hidden;
`;

const Title = styled.div`
    position: relative;
    left: ${props => -props.exampleIndex * 100}%;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: left 500ms;
`;

const restrictBy = (max = 1, min = 0) => x => Math.max(Math.min(max, x), min);

const ExamplesBlock = ({ innerRef }) => {
    const [exampleIndex, setExampleIndex] = useState(0);

    const onScroll = () => {
        if (innerRef && innerRef.current) {
            const rect = innerRef.current.getBoundingClientRect();
            const progress = restrictBy()(-rect.top / (rect.height - window.innerHeight));
            const imageIndex = progress === 1 ? examples.length - 1 : Math.floor(progress * examples.length);
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
            <StickyWrapper>
                <Description>
                    {examples.map(({ title }) => (
                        <Title exampleIndex={exampleIndex}>{title}</Title>
                    ))}
                </Description>
                <Laptop maxWidth={80} maxHeight={50} image={examples[exampleIndex].imageSrc} />
                <Description>
                    {examples.map(({ caption }) => (
                        <Title exampleIndex={exampleIndex}>{caption}</Title>
                    ))}
                </Description>
            </StickyWrapper>
        </Container>
    );
};

export default ExamplesBlock;
