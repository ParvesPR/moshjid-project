import React from 'react';

const SinglePrayer = ({ result, refetch }) => {
    const { name, azan, ekamot } = result;
    return (
        <div className="lg:w-96 sm:w-60 bg-[#e9e9e9] shadow-lg px-5">
            <div className="px-3 text-2xl font-bold grid grid-cols-3 border-[#C2C2C2] border-b-[1px] py-3">
                <p>{name}</p>
                <p className='font-normal'>{azan}</p>
                <p className='font-normal'>{ekamot}</p>
            </div>
        </div>
    );
};

export default SinglePrayer;