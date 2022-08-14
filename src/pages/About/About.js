import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import NavBar from '../Shared/NavBar/NavBar';
import AboutDetails from './AboutDetails';

const About = () => {
    const { data: about, isLoading, refetch } = useQuery('aboutUs', () =>
        fetch(' https://obscure-sierra-27359.herokuapp.com/committee', {
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
            <h2 className='text-center uppercase font-bold text-[#FFA90F] text-4xl'>Masjid Committee</h2>
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