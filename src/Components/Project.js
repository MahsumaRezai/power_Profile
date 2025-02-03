import { Fragment } from 'react';
import './Portfolio.css';
import { Title } from './Title';
import { Crad } from './Crad';
import Button from './Button';
export const Project = (props) => {
    return (
        <Fragment>
            <div className="cardwarrper">
                <Title title="Portfolio" />
                <p>There are some of my works and another my works ara in my Github account



                </p>
                <div>
                    <Crad />
                    <Button/>



                </div>

            </div>
        </Fragment>

    )
}