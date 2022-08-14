import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import noticeIcon from '../../assests/images/notice-icon.png';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllNotice from './AllNotice';

const Notice = () => {
    const { data: allNotice, isLoading, refetch } = useQuery('notice', () =>
        fetch(' https://obscure-sierra-27359.herokuapp.com/notice', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>
    };

    return (
        <section className='font-bensen bg-base-200 min-h-screen'>
            <div className='pt-10'>
                <NavBar></NavBar>
            </div>
            <div>
                <h2 className='text-5xl font-bold flex justify-center items-center text-center py-7'>
                    <img src={noticeIcon} className='w-10 mr-3' alt="" />
                    নোটিশ বোর্ডঃ <span className='text-red-500 ml-2'>{allNotice.length.toLocaleString('bn-BD')}</span> </h2>
                <article className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
                    {
                        allNotice.map(notice => <AllNotice
                            key={notice._id}
                            notice={notice}
                            refetch={refetch}
                        ></AllNotice>)
                    }
                </article>
            </div>
        </section>
    );
};

export default Notice;