import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import NavBar from '../../Shared/NavBar/NavBar';
import Blog from './Blog';
import Footer from '../../Shared/Footer/Footer';
import './Blogs.css';

const Blogs = () => {
    const { data: allBlogs, isLoading, refetch } = useQuery('blog', () =>
        fetch('http://localhost:5000/blogs', {
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
        <section className='bg-[#f1f1f1]'>
            <div className='pt-10'>
                <NavBar></NavBar>
            </div>
            <h2 className='text-5xl font-semibold font-bensen flex justify-center items-center text-center py-7'>
                মোট ব্লগঃ <span className='text-red-500 ml-2'>{allBlogs.length.toLocaleString('bn-BD')} টি</span> </h2>
            <div className='px-12 grid grid-cols-1 gap-4'>
                {
                    allBlogs.map(blogs => <Blog
                        key={blogs._id}
                        blogs={blogs}
                        refetch={refetch}
                    ></Blog>)
                }
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Blogs;
