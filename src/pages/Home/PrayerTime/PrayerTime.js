import React from 'react';
import './PrayerTime.css';
import SinglePrayer from '../PrayerTime/SinglePrayer';
import about from '../../../assests/images/about.png';
import timeTitle from '../../../assests/images/timeTitle.png';
import aboutTitle from '../../../assests/images/aboutTitle.png';
import underline from '../../../assests/images/underline.png';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import moment from 'moment';

const PrayerTime = () => {
    const dateClock = moment().format('LLLL');
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
        <section className="prayer-section pt-12 pb-7 px-12 border-b-2 border-t-2 border-[#c4c4c4] flex flex-col lg:flex-row justify-center gap-5">
            <div className='pl-0 lg:pl-12 lg:mb-0 order-last lg:order-first'>
                <img className='py-3 lg:py-0 block w-7/12 mx-auto md:w-6/12 lg:w-full' src={timeTitle} alt="" />
                <p className='text-center pb-2'>{dateClock}</p>
                <img src={underline} className='w-7/12 md:w-6/12 lg:w-11/12 mx-auto pb-3' alt="" />
                <div className='ml-10 lg:ml-0 flex justify-center gap-2 lg:gap-4 text-white font-normal text-lg lg:text-xl text-center'>
                    <span className='bg-[#FFA90F] py-1 px-3 rounded-t-md mr-4 lg:mx-9 lg:mr-6'>আযান</span>
                    <span className='bg-[#FFA90F] py-1 px-3 rounded-t-md text-white mr-2 lg:mr-0 lg:mx-0'>ইকামত</span>
                </div>
                {
                    prayerTime.map(result => <SinglePrayer
                        key={result._id}
                        refetch={refetch}
                        result={result}
                    ></SinglePrayer>)
                }
            </div>
            <article className='order-first lg:order-last'>
                <div className="hero items-start justify-center">
                    <div className="hero-content lg:gap-3 flex-row lg:flex-row mr-5">
                        <img src={about} className="max-w-sm w-7/12 lg:w-8/12 xl:w-full" alt='about' />
                        <div>
                            <img className='w-11/12 md:w-3/4 lg:w-10/12 2xl:w-full mx-auto' src={aboutTitle} alt="" />
                            <img src={underline} className='w-3/4 lg:w-11/12 mx-auto' alt="" />
                        </div>
                    </div>
                </div>
                <p className='font-bensen text-xl md:text-2xl lg:text-3xl lg:px-8'>
                    মসজিদের উৎকর্ষের ক্ষেত্রে,সেই সপ্তম শতাব্দীর সাদাসিধে খোলা প্রাঙ্গণবিশিষ্ট মসজিদে কাবা বা মসজিদে নববী থেকে বর্তমানে এর প্রভূত উন্নয়ন ঘটেছে। এখন অনেক মসজিদেরই সুবিশাল গম্বুজ,উচু মিনার এবং বৃহদাকার প্রাঙ্গণ দেখা যায়। মসজিদের উৎপত্তি আরব উপদ্বীপে হলেও বর্তমানে তা পৃথিবীর সব দেশেই ছড়িয়ে পড়েছে।
                </p>
            </article>
        </section>
    );
};

export default PrayerTime;