import React from 'react';
import './PrayerTime.css';
import islamPilar from '../../../assests/images/islam-pilar.png';

const PrayerTime = () => {
    return (
        <section className='islam-pilar flex items-center'>
            <div>
                <img src={islamPilar} alt="" />
            </div>
        </section>
    );
};

export default PrayerTime;