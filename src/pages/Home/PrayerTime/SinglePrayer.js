import React from 'react';

const SinglePrayer = ({ result, refetch }) => {
    const { name, azan, ekamot } = result;
    return (
        <div className="lg:w-96 mx-auto bg-[#e9e9e9] shadow-lg px-5">
            <div className="px-3 text-3xl font-bold grid grid-cols-3 border-[#c2c2c2a5] border-b-[1px] py-2">
                <p>{name}</p>
                <p className='font-normal'>{azan}</p>
                <p className='font-normal'>{ekamot}</p>
            </div>
        </div>
    );
};

export default SinglePrayer;