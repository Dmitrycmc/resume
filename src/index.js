import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import './index.css';

window.addEventListener('scroll', e => {e.preventDefault();})

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

ReactDOM.render(<Root />, document.getElementById('root'));
