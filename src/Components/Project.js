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
                <p>There are some of my works

Hello, my name is Masoumeh Nawrozi. I live in Herat, Afghanistan. I like coding I have been learning programming for three year. During this time, I have worked on many projects in this sector and every day I try to increase my abilities in this sector.

                </p>
                <div>
                    <Crad />
                    <Button/>



                </div>

            </div>
        </Fragment>

    )
}