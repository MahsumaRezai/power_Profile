import React, { useState } from 'react';
import './Contact.css';
import { Fragment } from 'react'


const Contact = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API or email)
        console.log('Form submitted', formData);
    };

    return (
        <Fragment>


            <div className="contact-container">
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                    </form>
                </div>

                <div className="map-container">
                    <h3> Location</h3>

                    <iframe
                        title="Location"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Herat_province_detail_map.png"
                        width="100%"

                        height="400"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div >
                <div type="submit" className="button">Send Message</div>

            </div >
        </Fragment>

    );
};

export default Contact;