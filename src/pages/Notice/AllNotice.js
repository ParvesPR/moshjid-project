import React, { useState } from 'react';
import './AllNotice.css';

const AllNotice = ({ notice }) => {
    const [showMore, setShowMore] = useState(true);
    const { name, subject } = notice;

    return (
        <div className='px-12'>
            <div className="card bg-base-100 shadow-xl mb-3 content h-min">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>

                    <h5>
                        {showMore ? subject : subject.slice(0, 100)}
                        <span>{subject.length > 100 &&
                            <button className="text-purple-500 text-xs ml-1 font-semibold" onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Show less" : "...Show more"}
                            </button>
                        }
                        </span>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default AllNotice;