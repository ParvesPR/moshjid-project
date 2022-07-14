import React, { useState } from 'react';

const AllNotice = ({ notice }) => {
    const [showMore, setShowMore] = useState(true);
    const { name, subject } = notice;

    return (
        <div className='px-10'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl mb-3">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>

                    <h5>
                        {showMore ? subject : subject.slice(0, 20)}
                        <p>
                            <button className="text-purple-500 font-semibold" onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Show less" : "Show more"}
                            </button>
                        </p>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default AllNotice;