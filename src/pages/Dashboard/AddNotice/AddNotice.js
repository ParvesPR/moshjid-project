import React from 'react';
import { useForm } from "react-hook-form";

const AddNotice = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    return (
        <section>
            {/* INPUT FORM */}

            <div className='flex  justify-center items-center font-bensen'>

                <div class="card w-3/6 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 className='text-center text-3xl font-bold'>নতুন নোটিশ যোগ করুন</h2>
                        <form onSubmit={handleSubmit}>
                            <div class="form-control w-full max-w-lg">
                                <input type="text" placeholder="নোটিশের নাম / টাইটেল" class="input input-bordered w-full max-w-lg text-lg"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "নাম/টাইটেল দিতেই হবে"
                                        }
                                    })} />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-300">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div class="form-control w-full max-w-lg">
                                <input type="text" placeholder="নোটিশের বিষয়বস্তু" class="input input-bordered w-full max-w-lg text-lg"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "বিষয়বস্তু দিতেই হবে"
                                        }
                                    })} />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-300">{errors.name.message}</span>}
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

export default AddNotice;