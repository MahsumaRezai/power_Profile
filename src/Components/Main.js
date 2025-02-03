import { Fragment } from 'react';
import classes from './Main.module.css';
import img from '../img/mainimg.jpg';
import Button from './Button';

export const Main = (props) => {
    return (
        <Fragment>
            <div className={classes.main}>
                <div className={classes.textmain}>
                    <span className="paratow">Welcome to my portfolio website!</span>
                    <h1 className={classes.name}>Hi, I'm Masoumeh <span className={classes.job}>Full-Stack Developer</span></h1>
                    <span className={classes.condation}>Climbing Under Any Conditions</span>
                    <Button />

                </div>
                <div>
                    <img src={img} alt="Masoumeh" className={classes.triangle} />
                </div>
            </div>
        </Fragment>
    );
};