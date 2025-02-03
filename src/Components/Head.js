// src/Header.js
import React, { useState } from 'react';
import './Head.css';

const Head = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo">My Portfolio</div>

            
        </header>
    );
};

export default Head;
