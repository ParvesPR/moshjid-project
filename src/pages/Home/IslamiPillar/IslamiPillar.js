import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import islamPilar from '../../../assests/images/islamer-vitti.jpg';

const IslamiPillar = () => {
    return (
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <section>
                <div>
                    <img src={islamPilar} alt="" />
                </div>
            </section>
        </AnimationOnScroll>
    );
};

export default IslamiPillar;