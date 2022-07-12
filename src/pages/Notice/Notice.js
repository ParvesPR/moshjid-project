import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import noticeIcon from '../../assests/images/notice-icon.png';

const Notice = () => {
    return (
        <section className='font-bensen bg-base-200 min-h-screen'>
            <div className='pt-10'>
                <NavBar></NavBar>
            </div>
            <div>
                <h2 className='text-5xl font-bold flex justify-center items-center text-center py-7'>
                <img src={noticeIcon} className='w-10 mr-3' alt="" />
                    নোটিশ বোর্ড</h2>
            </div>
        </section>
    );
};

export default Notice;