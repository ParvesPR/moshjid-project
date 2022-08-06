import React from 'react';
import './PrayerTime.css';
import SinglePrayer from '../PrayerTime/SinglePrayer';
import about2 from '../../../assests/images/about2.png';
import underline from '../../../assests/images/underline.png';
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
        <section className="prayer-section pt-12 pb-7 px-12 border-b-2 border-t-2 border-[#c4c4c4] flex flex-col lg:flex-row justify-center gap-5">
            <div className='pl-0 lg:pl-12 order-last lg:order-first'>
                <div className='flex justify-center gap-4 text-white font-normal text-xl text-center'>
                    <span className='bg-[#FFA90F] py-1 px-3 rounded-t-md  mx-9 mr-6'>আযান</span>
                    <span className='bg-[#FFA90F] py-1 px-3 rounded-t-md text-white mx-0'>ইকামত</span>
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
                    <div className="hero-content flex-row lg:flex-row">
                        <img src={about2} className="max-w-sm w-7/12 lg:w-full" alt='about' />
                        <div>
                            <h1 className="text-4xl lg:text-7xl text-[#FFA810] font-bold text-center">আমাদের</h1>
                            <h1 className="text-4xl lg:text-7xl text-[#FFA810] font-bold text-center">সম্পর্কে</h1>
                            <img src={underline} className='w-3/4 lg:w-11/12 mx-auto' alt="" />
                        </div>
                    </div>
                </div>
                <p className='block font-bensen text-xl lg:text-3xl lg:px-8'>
                    মসজিদের উৎকর্ষের ক্ষেত্রে,সেই সপ্তম শতাব্দীর সাদাসিধে খোলা প্রাঙ্গণবিশিষ্ট মসজিদে কাবা বা মসজিদে নববী থেকে বর্তমানে এর প্রভূত উন্নয়ন ঘটেছে। এখন অনেক মসজিদেরই সুবিশাল গম্বুজ,উচু মিনার এবং বৃহদাকার প্রাঙ্গণ দেখা যায়। মসজিদের উৎপত্তি আরব উপদ্বীপে হলেও বর্তমানে তা পৃথিবীর সব দেশেই ছড়িয়ে পড়েছে।
                </p>
            </article>
        </section>
    );
};

export default PrayerTime;