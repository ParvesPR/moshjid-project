import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const AllUsers = () => {
    const { data: users, isLoading } = useQuery('user', () =>
        fetch('http://localhost:5000/users', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section>
            <h2 className='text-purple-600 font-bold text-center py-5 font-bensen text-3xl'>মোট ব্যবহারকারীর সংখ্যাঃ <span className='text-red-500'>{users.length.toLocaleString('bn-bd')}</span></h2>
        </section>
    );
};

export default AllUsers;