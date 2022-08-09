import React from 'react';
import { useForm } from "react-hook-form";

const AddPrayerTime = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const handleAddTime = event => {
        event.preventDefault();
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
                                    {...register("fojor", {
                                        required: {
                                            value: true,
                                            message: "দয়া করে ফজর নামাজের সময় দিন"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.fojor?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.fojor.message}</span>}
                                </label>
                            </div>

                            {/* JOHOR */}
                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="যোহর" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("johor", {
                                        required: {
                                            value: true,
                                            message: "দয়া করে যোহর নামাজের সময় দিন"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.johor?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.johor.message}</span>}
                                </label>
                            </div>

                            {/* ASOR */}
                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="আছর" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("asor", {
                                        required: {
                                            value: true,
                                            message: "দয়া করে আছর নামাজের সময় দিন"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.asor?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.asor.message}</span>}
                                </label>
                            </div>

                            {/* MAGRIB */}
                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="মাগরিব" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("magrib", {
                                        required: {
                                            value: true,
                                            message: "দয়া করে মাগরিব নামাজের সময় দিন"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.magrib?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.magrib.message}</span>}
                                </label>
                            </div>
                            {/* ESHA */}
                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="এশা" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("esha", {
                                        required: {
                                            value: true,
                                            message: "দয়া করে এশা নামাজের সময় দিন"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.esha?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.esha.message}</span>}
                                </label>
                            </div>
                            {/* JUMMA */}
                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="জুম্মা" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("jummma", {
                                        required: {
                                            value: true,
                                            message: "দয়া করে জুম্মা নামাজের সময় দিন"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.jummma?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.jummma.message}</span>}
                                </label>
                            </div>
                            {/* ESHRAK */}
                            <div className="form-control w-full max-w-lg mb-3">
                                <input type="text" placeholder="ইশরাক" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("eshrak")} />
                            </div>
                            {/* SUNRISE */}
                            <div className="form-control w-full max-w-lg mb-3">
                                <input type="text" placeholder="সূর্যোদয়" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("sunrise")} />
                            </div>
                            {/* SUNSET */}
                            <div className="form-control w-full max-w-lg mb-3">
                                <input type="text" placeholder="সূর্যাস্ত" className="input input-bordered input-sm w-full max-w-md text-md"
                                    {...register("sunset")} />
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