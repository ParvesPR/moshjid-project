import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog';
import './HomeBlog.css';

const HomeBlog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(' http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <section>
            <div className='px-12 mt-12 blog-section'>
                {
                    blogs.slice(-3).map(blog => <Blog
                        key={blog._id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
            <div className='flex justify-center py-5'>
                <button className='btn-sm text-center rounded-md btn bg-[#FFA90F] border-none font-normal text-2xl text-white font-bensen'><Link to='/blogs'>আরো দেখুন</Link></button>
            </div> 

        </section>
    );
};

export default HomeBlog;