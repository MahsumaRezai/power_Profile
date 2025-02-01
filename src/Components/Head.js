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

            <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <ul className="list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">About</a></li>
                    <li><a href="#about">Skills</a></li>
                    <li><a href="#about">Resume</a></li>
                    <li><a href="#contact">Services</a></li>
                    <li><a href="#contact">Projects</a></li>
                    <li><a href="#contact">Certificates</a></li>
                    <li><a href="#contact">Idea</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <button className="menu-button" onClick={toggleMenu}>
                {isMenuOpen ? 'Close' : 'Open'}
            </button>
        </header>
    );
};

export default Head;
