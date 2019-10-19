import React from "react";
import styled from 'styled-components/macro';
import background2 from "../assets/images/background2.jpg";

const Container = styled.div`
    background-image: url(${background2});
    width: 100vw;
    height: 100vh;
    background-size: cover;
`;

const AboutBlock = () => <Container>about</Container>;

export default AboutBlock;