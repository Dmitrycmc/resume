import React from 'react';
import GithubIcon from '../../assets/icons/github';
import PlayIcon from '../../assets/icons/play';

const Links = ({ deploy, source }) => (
    <>
        {source && (
            <a href={source} target="_blank" rel="noopener noreferrer">
                <GithubIcon />
            </a>
        )}
        {deploy && (
            <a href={deploy} target="_blank" rel="noopener noreferrer">
                <PlayIcon />
            </a>
        )}
    </>
);

export default Links;
