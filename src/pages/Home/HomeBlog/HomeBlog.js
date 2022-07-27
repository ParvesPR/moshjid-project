import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import './HomeBlog.css';

const HomeBlog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <section className='p-12 blog-section'>
            {
                blogs.slice(-3).map(blog => <Blog
                    key={blog._id}
                    blog={blog}
                ></Blog>)
            }
        </section>
    );
};

export default HomeBlog;