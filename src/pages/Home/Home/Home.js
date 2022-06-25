import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Committee from '../Committee/Committee';
import PrayerTime from '../PrayerTime/PrayerTime';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PrayerTime></PrayerTime>
           <Committee></Committee> 
           <Blogs></Blogs>
        </div>
    );
};

export default Home;