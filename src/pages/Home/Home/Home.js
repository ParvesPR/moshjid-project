import React from 'react';
import Banner from '../Banner/Banner';
import Committee from '../Committee/Committee';
import PrayerTime from '../PrayerTime/PrayerTime';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PrayerTime></PrayerTime>
           <Committee></Committee> 
        </div>
    );
};

export default Home;