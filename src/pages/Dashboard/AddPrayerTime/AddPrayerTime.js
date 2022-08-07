import React from 'react';
import { useForm } from "react-hook-form";

const AddPrayerTime = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    return (
        <section>
            <div className='flex  justify-center items-center font-bensen'>
                <div className="card w-3/6 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className='text-center text-3xl font-bold'>নামাজের সময়সূচী পরিবর্তন করুন</h2>
                        <form>
                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="নোটিশের নাম / টাইটেল" className="input input-bordered w-full max-w-lg text-lg"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "নাম/টাইটেল দিতেই হবে"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <textarea type="text" placeholder="নোটিশের বিষয়বস্তু" className="textarea textarea-bordered w-full text-lg"
                                    {...register("subject", {
                                        required: {
                                            value: true,
                                            message: "বিষয়বস্তু দিতেই হবে"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.subject?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.subject.message}</span>}
                                </label>
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