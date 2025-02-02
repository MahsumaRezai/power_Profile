import React from "react";
import './Resume.css';
import { Title } from "./Title";

const Resume = () => {
    return (
        <section id="resume" className="resume section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <Title title=" Resume" />

                <p>
                    I am keen to begin a career in computer science. I am graduated and putting endeavor to combine studies with
                    working and other commitments. In achieving this, I have shown myself to be self-motivated, committed and
                    determined in achieving personal, professional and organizational goals, come what may. I have also
                    demonstrated negotiating and organizing skills, a firm sense of responsibility, commitment and my capacity is
                    to work hard under pressure. I possess excellent verbal and written communication skills and able to relate
                    to a wide range of people, as proven by my varied work experiences.
        </p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Summary</h3>
                        <div className="resume-item pb-0">
                            <h4>Programming Skills</h4>
                            <ul>
                                <li>4+ years of experience with HTML, CSS, Tailwind, Bootstrap and SASS</li>
                                <li>3+ years of experience with JavaScript, React.js and Next.js</li>
                                <li>2+ years of experience with Node.js</li>
                                <li>Proven ability to develop high-performance websites</li>
                                <li>Ability to solve challenges in JavaScript</li>
                            </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Bachelor of Computer Science & Full-Stack Developer</h4>
                            <h5>YHDO</h5>
                            <p>Business Development Services</p>
                            <p>Afghanistan Herat (2023-2024), Business Development Services.</p>
                        </div>

                        <div className="resume-item">
                            <h4>Heart University</h4>
                            <h5>Computer Science</h5>
                            <p>Computer Science Faculty of Herat University</p>
                            <p>Afghanistan (2017–2021) Graduated from the Computer Science Faculty of Herat University.</p>
                        </div>

                        <div className="resume-item">
                            <h4>CTI</h4>
                            <h5>Code to Inspire</h5>
                            <p>CTI (2018–2019) Graduated from Code to Inspire Academy.</p>
                        </div>
                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Computer Teacher</h4>
                            <h5>2024 - Present</h5>
                            <ul>
                                <li>Computer teacher at Resalat</li>
                                <li>Worked on more than 80 projects in the coding section, three of which are in my GitHub account</li>
                                <li>Worked with CTI in the Front-end team</li>
                                <li>Teaching coding for girls with online tools</li>
                            </ul>
                        </div>

                        <div className="resume-item">
                            <h4> Afghan Telecom Telecommunication</h4>
                            <h5>2020 - 2022</h5>
                            <ul>
                                <li>Worked at Afghan Telecom Telecommunication Company</li>
                                <li>English and computer teacher</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
