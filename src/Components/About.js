import { Fragment } from 'react';
import classes from './About.module.css';
import img from '../img/mainimg.jpg'


export const About = (props) => {
    return (
        <Fragment>
            <div className={classes.about}>
                <div className={classes.textabout}>
                    <h1 className={classes.title}>About</h1>
                    <p>
                        Hello, my name is Masoumeh Nawrozi. I Graduated form copmputer science form Herat university I live in Herat, Afghanistan. I like coding I have been learning programming for three year. During this time,
                        I have worked on many projects in this sector and every day I try to increase my abilities in this sector..
                    </p>

                </div>
                <div className={classes.card}>
                    <div className={classes.img}>
                        <img src={img} alt=""></img>
                    </div>
                    <div>

                        <div className={classes.info}>
                            <h1>Web Designer & Web Developer</h1>

                            <li><i class="bi" ></i> <strong>Github:</strong> <a href="https://github.com/MahsumaRezai"> https://github.com/MahsumaRezai
                                </a></li>
                            <li><i className={classes.bi}></i> <strong>Email Address:</strong> <a href="mahsuma.rezai8@gmail.com"> mahsuma.rezai8@gmail.com</a></li>
                            <li><i className={classes.bi}></i> <strong>X Account:</strong>
                                <a href="@MahsumaRezai"> @MahsumaRezai</a></li>

                            <li><i className={classes.bi}></i> <strong>City:</strong> <a>Herat, Afghanistan</a></li>
                            <li><i className={classes.bi}></i> <strong>
                                Degree:</strong> <a>Bachelor of computer science</a></li>


                        </div>
                    </div>



                </div>
            </div>

        </Fragment>

    )
}
