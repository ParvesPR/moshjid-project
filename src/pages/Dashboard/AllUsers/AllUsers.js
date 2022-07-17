import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import User from '../AllUsers/User/User.js';

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
            <div className="overflow-x-auto px-12">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <User
                                key={user._id}
                                index={index}
                                user={user}
                            ></User>)
                        }

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUsers;