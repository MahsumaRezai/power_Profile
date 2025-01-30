import React, { useState } from 'react';
import './Slider.css'; // Make sure to import the CSS
import imgone from '../img/cti.png'

const ImageSlider = () => {
    // Array of image URLs to display in the slider
    const images = [
        imgone,
        imgone,



    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">
            {/* Slider Image */}
            <div className="slider">
                <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="slider-image" />
            </div>

            {/* Navigation Buttons */}
            <button className="prev-btn" onClick={prevImage}>
                &#10094;
      </button>
            <button className="next-btn" onClick={nextImage}>
                &#10095;
      </button>
        </div>
    );
};

export default ImageSlider;
