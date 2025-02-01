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
                        Hello, my name is Masoumeh Nawrozi. I Graduated form copmputer science form Herat university I live in Herat, Afghanistan.
                        a full-stack developer with a passion for creating innovative and powerful web applications. With 4 years of experiences in the
                         latest and trending technologies, I specialize in crafting seamless and robust solutions that meet the unique needs of businesses. I have a deep understanding of front-end development, including HTML, CSS, and JavaScript, along with proficiency in popular framework such as React. On the back end, I excel in building scalable APIs and working with database like SQL. My goal is to deliver high-performing and user-centric applications that drive growth and provide exceptional experiences.
                         Let's collaborate and bring your ideas to life with cutting-edge technology and efficient code.

                    </p>

                </div>
                <div className={classes.card}>
                    <div className={classes.img}>
                        <img src={img} alt=""></img>
                    </div>
                    <div>

                        <div className={classes.info}>
                            <h1>Web Designer & Web Developer</h1>

                            <li><i class="bi" ></i> <strong>Github:</strong> <a href=""> https://github.com/MahsumaRezai
                                </a></li>
                            <li><i className={classes.bi}></i> <strong>Email Address:</strong> <a href=""> mahsuma.rezai8@gmail.com</a></li>
                            <li><i className={classes.bi}></i> <strong>X Account:</strong>
                                <a> @MahsumaRezai</a></li>

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
