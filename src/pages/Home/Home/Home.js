import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Committee from '../Committee/Committee';
import IslamiPillar from '../IslamiPillar/IslamiPillar';
import PrayerTime from '../PrayerTime/PrayerTime';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <IslamiPillar></IslamiPillar>
            <PrayerTime></PrayerTime>
            <Committee></Committee>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;