import React from 'react'
import underline from '../../../assests/images/underline.png';
import { useQuery } from 'react-query';
import './Committee.css';
import Loading from '../../Shared/Loading';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Committee = () => {
    const { data: allCommittee, isLoading } = useQuery('committee', () =>
        fetch(' http://localhost:5000/committee')
            .then(res => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>
    };
    return (
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <section className='mt-6 committee-section py-3 px-12'>
                <h2 className='text-center uppercase font-bold text-[#FFA90F] text-4xl'>Masjid Committee</h2>
                <div className='text-center block w-2/4 mx-auto mb-9'>
                    <img src={underline} className='sm:max-w-sm lg:w-1/2 mx-auto' alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-center gap-y-2 lg:gap-0'>
                    {
                        allCommittee.map(committee =>
                            <div key={committee._id}>
                                <div className="content">
                                    <div className="content-overlay"></div>
                                    <img className="content-image w-[280px] mb-2 rounded-full border-[#FFA90F] border-8" src={committee.image} alt="committee profile pic" />
                                    <div className="content-details fadeIn-bottom">
                                        <h3 className="font-bensen content-title">{committee.name}</h3>
                                        <h4 className="font-bensen content-title">{committee.committeeType}</h4>
                                        <p className="content-text">{committee.phone}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </AnimationOnScroll>
    );
};

export default Committee;