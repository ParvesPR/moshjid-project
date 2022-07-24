import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Committee from '../Committee/Committee';
import HomeBlog from '../HomeBlog/HomeBlog';
import IslamiPillar from '../IslamiPillar/IslamiPillar';
import PrayerTime from '../PrayerTime/PrayerTime';


const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <IslamiPillar></IslamiPillar>
            <PrayerTime></PrayerTime>
            <Committee></Committee>
            <HomeBlog></HomeBlog>
            <Footer></Footer>
        </section>
    );
};

export default Home;