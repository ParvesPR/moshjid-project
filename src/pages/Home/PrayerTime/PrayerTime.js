import React from 'react';
import './PrayerTime.css';
import SinglePrayer from '../PrayerTime/SinglePrayer';
import about from '../../../assests/images/about.jpg';
import aboutBorder from '../../../assests/images/about-border.png';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const PrayerTime = () => {
    const { data: prayerTime, isLoading, refetch } = useQuery('prayer', () =>
        fetch('http://localhost:5000/prayerTime', {
            method: 'GET'
        })
            .then(res => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>
    };
    return (
        <section className="prayer-section pt-12 pb-7 px-12 border-b-2 border-t-4 border-[#c4c4c4] flex flex-col lg:flex-row justify-center gap-20">
            <div className='card-child'>
                {
                    prayerTime.map(result => <SinglePrayer
                        key={result._id}
                        refetch={refetch}
                        result={result}
                    ></SinglePrayer>)
                }
            </div>
            <article>
                <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                    <div className='relative'>
                        <img src={about} className='relative rounded-lg w-72 lg:h-[290px] z-[11]' alt="" />
                        <img src={aboutBorder} className='absolute -bottom-7 -left-7 z-[1] hidden lg:block' alt="" />
                    </div>
                    <div>
                        <p className='text-6xl text-[#FFA810] font-bold text-center'>আমাদের</p>
                        <p className='text-6xl text-[#FFA810] font-bold text-center'>সম্পর্কে</p>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default PrayerTime;