import React from "react";
import canvas from './canvas.png';

const CanvasIcon = props => (
    <img src={canvas} width="60px" title="Canvas" stroke="white" stroke-width="1" {...props}/>
);

export default CanvasIcon;