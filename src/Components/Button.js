import React from 'react';
import './DownloadButton.css';

const Button = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf'; // The path to your CV
        link.download = 'My_CV.pdf'; // The name for the downloaded file
        link.click();
    };

    return (
        <button className="download-btn" onClick={handleDownload}>
            Download CV
        </button>
    );
};

export default Button;
