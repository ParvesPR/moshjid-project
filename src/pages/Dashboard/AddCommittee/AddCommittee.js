import React from 'react';
import { useForm } from "react-hook-form";

const AddCommittee = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    return (
        <section>

            <div className='flex  justify-center items-center font-bensen'>

                <div className="card w-full mx-2 lg:w-3/6 lg:mx-0 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className='text-center text-3xl font-bold'>নতুন কমিটি যোগ করুন</h2>
                        <form onSubmit={handleSubmit()}>
                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="কমিটির নাম" className="input input-bordered w-full max-w-lg text-lg"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "নাম দিতেই হবে"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <input type="text" placeholder="কমিটির ধরন/সভাপতি/অন্যান্য" className="input input-bordered w-full max-w-lg text-lg"
                                    {...register("type", {
                                        required: {
                                            value: true,
                                            message: "কমিটির ধরন দিতেই হবে"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.subject?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.subject.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <input type="text" placeholder="কমিটির মোবাইল নং" className="input input-bordered w-full max-w-lg text-lg"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: "মোবাইল নং দিতেই হবে"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.subject?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.subject.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <input type="text" placeholder="ইমেইল আইডি (অপশনাল)" className="input input-bordered w-full max-w-lg text-lg"
                                    {...register("email", {
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'দয়া করে, সঠিক ই-মেইল আইডি প্রদান করুন' // JS only: <p>error message</p> TS only support string
                                        }
                                    })} />
                                <label className="label">
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600 text-lg">{errors.email.message}</span>}
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

export default AddCommittee;