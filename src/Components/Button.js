import React from 'react';
import './DownloadButton.css';  // For styling

const DownloadButton = () => {
    return (
        <a href="/path/to/your/cv.pdf" download>
            <button className="download-btn">Download CV</button>
        </a>
    );
};

export default DownloadButton;
