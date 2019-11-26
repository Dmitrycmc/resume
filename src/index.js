import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import './index.css';

window.onload = function() {
    window.scrollTo(0, 0);
    setTimeout(() => {
        document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    }, 2500);
    ReactDOM.render(<Root />, document.getElementById('root'));
};
