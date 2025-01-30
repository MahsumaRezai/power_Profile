
import React from 'react';
import { Fragment } from 'react';
import './Skill.css';



const Active = ({ skillName, percentage }) => {
    return (
        <Fragment>

            <div className="progress">
                <span className="skill">
                    <span>{skillName}</span> <i className="val">{percentage}%</i>
                </span>
                <div className="progress-bar-wrap">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${percentage}%` }} // Dynamically set the width based on percentage
                    ></div>
                </div>
            </div>

        </Fragment>



    );
};

export default Active;
