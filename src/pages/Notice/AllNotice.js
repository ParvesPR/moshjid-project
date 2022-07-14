import React from 'react';

const AllNotice = ({ notice }) => {
    const { name, subject } = notice;
    return (
        <div className='px-10'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl mb-3">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{subject}</p>
                </div>
            </div>
        </div>
    );
};

export default AllNotice;