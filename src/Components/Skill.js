import React from 'react';
import './Skill.css';
import Active from './Active.js';
import { Fragment } from 'react';
import { Title } from './Title';


const Skills = () => {
    // Skills data
    const skills = [
        { name: 'HTML', percentage: 100 },
        { name: 'CSS', percentage: 100 },
        { name: 'Tailwind', percentage: 100 },
        { name: 'TypeScript', percentage: 80 },
        { name: 'JavaScript', percentage: 100 },
        { name: 'SCSS', percentage: 100 },
        { name: 'React.js', percentage: 100 },
        { name: 'PHP', percentage: 80 },
        { name: 'Next.js', percentage: 100 },
        { name: 'Bootstrap', percentage: 100 }
    ];

    return (
        <Fragment>
            <Title  title="skills"/>
            
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row skills-content skills-animation">
                    <div className="col-lg-6">
                        {skills.slice(0, 5).map(skill => (
                            <Active key={skill.name} skillName={skill.name} percentage={skill.percentage} />
                        ))}
                    </div>
                    <div className="col-lg-6">
                        {skills.slice(5).map(skill => (
                            <Active key={skill.name} skillName={skill.name} percentage={skill.percentage} />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>

    );
};

export default Skills;
