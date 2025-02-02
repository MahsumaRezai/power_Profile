import React from 'react';
import './DownloadButton.css';

const Button = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf'; // The path to your CV
        link.download = 'My_CV.pdf';
        link.click();
    };

    return (
        <div className="btn">
            <div className="download-btn" onClick={handleDownload}>
                Download CV
        </div>
        </div>

    );
};

export default Button;
