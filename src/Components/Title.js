import { Fragment } from 'react';
import classes from './Title.module.css'

export const Title = (props) => {
    return (
        <Fragment>
            <div className={classes.textabout}>
                <div className={classes.textabout}>
                    <h1 className={classes.title}>{props.title}</h1>
                </div>
            </div>


        </Fragment>
    )
}