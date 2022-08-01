import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const AddCommittee = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const handleOnSubmit = (data) => {
        const url = 'http://localhost:5000/committee';
        fetch(url, {
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
                        'কমিটি সফলভাবে যোগ করা হয়েছে !',
                        'success'
                    )
                    reset();
                }
            })
    }
    return (
        <section>

            <div className='flex  justify-center items-center font-bensen'>

                <div className="card w-full mx-2 lg:w-3/6 lg:mx-0 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className='text-center text-3xl font-bold'>নতুন কমিটি যোগ করুন</h2>
                        <form onSubmit={handleSubmit(handleOnSubmit)}>
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
                                <select type="text" className="input input-bordered w-full max-w-lg text-lg" {...register("committeeType", {
                                    required: {
                                        value: true,
                                        message: "কমিটির ধরন দিতেই হবে"
                                    }
                                })}>
                                    <option value="empty">কমিটির ধরন সিলেক্ট করুন</option>
                                    <option value="sovapoti">সভাপতি</option>
                                    <option value="committee">কমিটি</option>
                                </select>
                                <label className="label">
                                    {errors.committeeType?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.committeeType.message}</span>}
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
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.phone.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full mb-3 max-w-lg">
                                <label className="text-sm text-cyan-500">Profile Picture</label>
                                <input type="file"
                                    className="input input-bordered w-full max-w-lg text-md"
                                    {...register("image")}
                                />
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