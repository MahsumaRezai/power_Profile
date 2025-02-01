import { Fragment } from 'react';
import classes from './Main.module.css';
import img from '../img/mainimg.jpg';

export const Main = (props) => {
    return (
        <Fragment>
            <div className={classes.main}>
                <div className={classes.textmain}>
                    <p>Welcome to my portfolio website!</p>
                    <h1 className={classes.name}>Hi, I'm Masoumeh <span className={classes.job}>Full-Stack Developer</span></h1>
                    <span className={classes.condation}>Climbing Under Any Conditions</span>
                </div>
                <div>
                    <img src={img} alt="Masoumeh" className={classes.triangle} />
                </div>
            </div>
        </Fragment>
    );
};
