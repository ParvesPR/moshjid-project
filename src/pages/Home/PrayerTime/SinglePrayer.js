import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const SinglePrayer = ({ result, setManageTime, refetch }) => {
    const { name, azan, ekamot } = result;
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    let azanTime;
    if (azan !== ' ') {
        azanTime = <p className='font-normal'>{azan}</p>;
    }
    else {
        azanTime = '-----'
    }
    let ekamotTime
    if (ekamot !== ' ') {
        ekamotTime = <p className='font-normal'>{ekamot}</p>;
    }
    else {
        ekamotTime = '-----'
    }
    refetch();

    return (
        <div className="lg:w-96 sm:max-w-sm mx-auto bg-[#e9e9e9] rounded-lg shadow-lg px-5">
            <div className="px-3 text-xl md:text-2xl lg:text-3xl font-bold grid grid-cols-3 justify-center border-[#c2c2c2a5] border-b-[1px] py-2">
                <p>{name}</p>
                <p className='font-normal'>{azanTime}</p>
                <p className='font-normal'>{ekamotTime} </p>
                {admin &&
                    <label onClick={() => setManageTime(result)} htmlFor="prayerModal" className="cursor-pointer bg-[#FFA90F] py-[1px] text-center text-xs rounded-lg text-white">Edit</label>

                }
            </div>

        </div>
    );
};

export default SinglePrayer;