import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const AddPrayerTime = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const handleAddTime = data => {
        fetch(' https://obscure-sierra-27359.herokuapp.com/time', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'TIME সফলভাবে SET করা হয়েছে !',
                        'success'
                    )
                    reset();
                }
            })
    }
    return (
        <section>
            <div className='flex justify-center items-center font-bensen'>
                <div className="card w-5/6 lg:w-3/6 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className='text-center text-3xl font-bold'>নামাজের সময়সূচী পরিবর্তন করুন</h2>
                        <form onSubmit={handleSubmit(handleAddTime)}>
                            {/* FOJOR */}
                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="ফজর" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("ফজর", {
                                        required: {
                                            value: true,
                                            message: "দয়া করে ফজর নামাজের সময় দিন"
                                        }
                                    })} />
                                 <label className="label">
                                    {errors.ফজর?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.ফজর.message}</span>}
                                </label>
                            </div>

                            {/* JOHOR */}
                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="যোহর" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("যোহর", {
                                        required: {
                                            value: true,
                                            message: "দয়া করে যোহর নামাজের সময় দিন"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.যোহর?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.যোহর.message}</span>}
                                </label>
                            </div>

                            {/* ASOR */}
                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="আছর" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("আছর", {
                                        required: {
                                            value: true,
                                            message: "দয়া করে আছর নামাজের সময় দিন"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.আছর?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.আছর.message}</span>}
                                </label>
                            </div>

                            {/* MAGRIB */}
                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="মাগরিব" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("মাগরিব", {
                                        required: {
                                            value: true,
                                            message: "দয়া করে মাগরিব নামাজের সময় দিন"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.মাগরিব?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.মাগরিব.message}</span>}
                                </label>
                            </div>
                            {/* ESHA */}
                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="এশা" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("এশা", {
                                        required: {
                                            value: true,
                                            message: "দয়া করে এশা নামাজের সময় দিন"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.এশা?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.এশা.message}</span>}
                                </label>
                            </div>
                            {/* JUMMA */}
                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="জুম্মা" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("জুম্মা", {
                                        required: {
                                            value: true,
                                            message: "দয়া করে জুম্মা নামাজের সময় দিন"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.জুম্মা?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.জুম্মা.message}</span>}
                                </label>
                            </div>
                            {/* ESHRAK */}
                            <div className="form-control w-full max-w-lg mb-3">
                                <input type="text" placeholder="ইশরাক" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("ইশরাক")} />
                            </div>
                            {/* SUNRISE */}
                            <div className="form-control w-full max-w-lg mb-3">
                                <input type="text" placeholder="সূর্যোদয়" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("সূর্যোদয়")} />
                            </div>
                            {/* SUNSET */}
                            <div className="form-control w-full max-w-lg mb-3">
                                <input type="text" placeholder="সূর্যাস্ত" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("সূর্যাস্ত")} />
                            </div>

                            <input className='btn w-full font-semibold text-2xl' type="submit" value='সাবমিট করুন' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddPrayerTime;