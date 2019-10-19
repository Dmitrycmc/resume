import React from "react";
import styled from 'styled-components/macro';
import background1 from "../assets/images/background1.jpg";

const Container = styled.div`
    background-image: url(${background1});
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    font-size: 5em;
    font-family: "Arial Black";
    color: white;
    text-transform: uppercase;
    width: 500px;
    margin: 20%;
`;

const FaceBlock = () => <Container><Title>Middle Frontend Developer</Title></Container>;

    export default FaceBlock;