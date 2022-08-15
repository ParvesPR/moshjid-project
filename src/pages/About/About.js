import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import NavBar from '../Shared/NavBar/NavBar';
import AboutDetails from './AboutDetails';
import aboutTitle from '../../assests/images/aboutTitle.png';
import underline from '../../assests/images/underline.png';
import aboutImg from '../../assests/images/about.png';

const About = () => {
    const { data: about, isLoading, refetch } = useQuery('aboutUs', () =>
        fetch(' http://localhost:5000/committee', {
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
        <section>
            <div className='my-10'>
                <NavBar></NavBar>
            </div>
            <article className='pb-5 bg-[#0000000a]'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={aboutImg} className="w-3/6 md:3/6 lg:w-2/6 mx-auto" alt='about' />
                        <figure>
                            <img src={aboutTitle} className="w-3/6 md:3/6 lg:w-3/6 mx-auto" alt="" />
                            <img src={underline} className="w-3/6 md:3/6 lg:w-3/6 mx-auto" alt="" />
                        </figure>
                    </div>
                </div>
                <p className='font-bensen text-xl md:text-2xl lg:text-3xl px-6 lg:px-8'>
                    মসজিদের উৎকর্ষের ক্ষেত্রে,সেই সপ্তম শতাব্দীর সাদাসিধে খোলা প্রাঙ্গণবিশিষ্ট মসজিদে কাবা বা মসজিদে নববী থেকে বর্তমানে এর প্রভূত উন্নয়ন ঘটেছে। এখন অনেক মসজিদেরই সুবিশাল গম্বুজ,উচু মিনার এবং বৃহদাকার প্রাঙ্গণ দেখা যায়। মসজিদের উৎপত্তি আরব উপদ্বীপে হলেও বর্তমানে তা পৃথিবীর সব দেশেই ছড়িয়ে পড়েছে।
                </p>
            </article>
            <h2 className='text-center uppercase font-bold text-[#FFA90F] text-4xl py-5'>Masjid Committee</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0'>
                {
                    about.map(result => <AboutDetails
                        key={result._id}
                        result={result}
                        refetch={refetch}
                    ></AboutDetails>)
                }
            </div>
        </section>
    );
};

export default About;