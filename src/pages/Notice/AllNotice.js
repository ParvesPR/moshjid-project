import React, { useState } from 'react';

const AllNotice = ({ notice }) => {
    const [showMore, setShowMore] = useState(true);
    const { name, subject } = notice;

    return (
        <div className='px-12'>
            <div className="card bg-base-100 shadow-xl mb-3">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>

                    <h5>
                        {showMore ? subject : subject.slice(0, 100)}
                        <p>{subject.length > 100 &&
                            <button className="text-purple-500 font-semibold" onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Show less" : "Show more"}
                            </button>
                        }
                        </p>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default AllNotice;