import { Fragment } from 'react';
import './Portfolio.css';
import imgone from '../img/cti.png'
import imgotow from '../img/ctitow.png'
import imgthree from '../img/hospital.png'
import imgfour from '../img/inta.png'
import imgfive from '../img/hosipattow.png'
import imgsix from '../img/shop.png'


export const Crad = () => {
    return (
        <Fragment>
            <div className="cardcontet" >
                <div className="cardconcept">
                    <div className="cardone">
                        <img src={imgone} alt="" />
                    </div>
                    <div className="cardone">
                        <img src={imgotow} alt="" />

                    </div>
                    <div className="cardone">
                        <img src={imgthree} alt="" />

                    </div>
                </div>
                <div className="cardconcept">
                    <div className="cardone">
                        <img src={imgfour} alt="" />

                    </div>
                    <div className="cardone">
                        <img src={imgfive} alt="" />

                    </div>
                    <div className="cardone">
                        <img src={imgsix} alt="" />

                    </div>
                </div>


            </div>

        </Fragment>
    )
}