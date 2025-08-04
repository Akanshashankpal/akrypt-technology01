import React from 'react';
import { Link } from 'react-router-dom';

const WebNavbar = () => {
    return (
        <div>
            <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/service'}>Service</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    );
}

export default WebNavbar;
