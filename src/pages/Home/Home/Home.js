import React from 'react';
import Footer from '../../Shared/Footer/Footer';
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
           <Footer></Footer>
        </div>
    );
};

export default Home;