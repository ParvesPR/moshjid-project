import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';

const PrayerModal = ({ manageTime, setManageTime, refetch }) => {
    const { name, _id } = manageTime;
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const handleAddTime = (data) => {
        const time = {
            azan: data.name,
            ekamot: data.ekamot,
            
        };
        fetch(`http://localhost:5000/prayerTime/${_id}`, {
            method: 'PUT',

            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'সফলভাবে পরিবর্তন করা হয়েছে !',
                        'success'
                    )
                    refetch();
                    reset();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="prayerModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label title='close' htmlFor="prayerModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl text-center font-bold text-purple-700 uppercase">Hello {user.displayName}</h3>
                    <p className="py-4 font-semibold text-lg text-center text-slate-700">আপনি <span className='text-red-600 text-xl font-bold'>{name}</span> সময় পরিবর্তনের জন্য নির্বাচন করেছেন</p>

                    {/* FORM */}
                    <form onSubmit={handleSubmit(handleAddTime)}>
                        <div className="form-control w-full max-w-lg">
                            <label className="text-lg text-black">{name}</label>
                            <input type="text" placeholder='আযান' className="input input-bordered w-full max-w-lg text-lg"
                                {...register("azan", {
                                    required: {
                                        value: true,
                                        message: "দয়া করে আযানের সময় নির্বাচন করুন"
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-lg">
                            <label className="text-lg text-black">{name}</label>
                            <input type="text" placeholder='ইকামত' className="input input-bordered w-full max-w-lg text-lg"
                                {...register("ekamot", {
                                    required: {
                                        value: true,
                                        message: "দয়া করে ইকামতের সময় নির্বাচন করুন"
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.name.message}</span>}
                            </label>
                        </div>
                    </form>
                    <button className='w-full btn btn-sm' onClick={() => handleAddTime(_id)}>Save Change</button>
                </div>
            </div>
        </div>
    );
};

export default PrayerModal;