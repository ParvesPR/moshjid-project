import React from 'react';
import './PrayerTime.css';

const PrayerTime = () => {
    return (
        <section className="prayer-section pt-12 pb-7 px-12 border-b-4 border-t-4 border-[#c4c4c4]">
            <div className="cardBg card w-96 bg-[#e9e9e9] shadow-lg">
                <div className="card-body text-3xl font-bold">
                    <div className='grid lg:grid-cols-3 border-b-2 border-[#c4c4c4] justify-items-center pb-2'>
                        <p>ফজর </p>
                        <p className='font-normal'>৪ঃ৩০</p>
                        <p className='font-normal'>৫ঃ১০</p>
                    </div>
                    <div className='grid lg:grid-cols-3 border-b-2 border-[#c4c4c4] justify-items-center pb-2'>
                        <p>যোহর </p>
                        <p className='font-normal'>৪ঃ৩০</p>
                        <p className='font-normal'>৫ঃ১০</p>
                    </div>
                    <div className='grid lg:grid-cols-3 border-b-2 border-[#c4c4c4] justify-items-center pb-2'>
                        <p>আছর </p>
                        <p className='font-normal'>৪ঃ৩০</p>
                        <p className='font-normal'>৫ঃ১০</p>
                    </div>
                    <div className='grid lg:grid-cols-3 border-b-2 border-[#c4c4c4] justify-items-center pb-2'>
                        <p>মাগরিব </p>
                        <p className='font-normal'>৪ঃ৩০</p>
                        <p className='font-normal'>৫ঃ১০</p>
                    </div>
                    <div className='grid lg:grid-cols-3 border-b-2 border-[#c4c4c4] justify-items-center pb-2'>
                        <p>এশা </p>
                        <p className='font-normal'>৪ঃ৩০</p>
                        <p className='font-normal'>৫ঃ১০</p>
                    </div>
                    <div className='grid lg:grid-cols-3 border-b-2 border-[#c4c4c4] justify-items-center pb-2'>
                        <p>জুম্মা </p>
                        <p className='font-normal'>৪ঃ৩০</p>
                        <p className='font-normal'>৫ঃ১০</p>
                    </div>
                    <div className='grid lg:grid-cols-3 border-b-2 border-[#c4c4c4] justify-items-center pb-2'>
                        <p>ইশরাক </p>
                        <p className='font-normal'>-----</p>
                        <p className='font-normal'>-----</p>
                    </div>
                    <div className='grid lg:grid-cols-3 border-b-2 border-[#c4c4c4] justify-items-center pb-2'>
                        <p>সূর্যোদয় </p>
                        <p className='font-normal'>-----</p>
                        <p className='font-normal'>-----</p>
                    </div>
                    <div className='grid lg:grid-cols-3 border-b-2 border-[#c4c4c4] justify-items-center pb-2'>
                        <p>সূর্যাস্ত </p>
                        <p className='font-normal'>-----</p>
                        <p className='font-normal'>-----</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrayerTime;