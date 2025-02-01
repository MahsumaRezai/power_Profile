import React, { useState, useEffect, useCallback } from 'react';
import './Certfaio.css';
import imageone from '../img/code.png';
import imagetow from '../img/inter.jpg';
import imagethree from '../img/intertow.jpg';
import imagefour from '../img/resal.jpg';
import { Title } from './Title';

const Certfation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        imageone,
        imagetow,
        imagethree,
        imagefour
    ];

    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(goToNext, 3000); // Change every 3 seconds
        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [goToNext]);

    return (
        <div className="content">
            <Title title="Certificates" />

            <div className="warrper">
                <div className="slider-container">
                    <button className="prev" onClick={goToPrevious}>←</button>
                    <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="slider-image" />
                    <button className="next" onClick={goToNext}>→</button>
                </div>
            </div>
        </div>
    );
};

export default Certfation;
