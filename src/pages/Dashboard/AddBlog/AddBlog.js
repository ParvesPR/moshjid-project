import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const AddBlog = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgStoreKey = '3528b3ade157fe6b5d8fedbb6b473c09';
    const onSubmit = async data => {
        console.log('data', data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStoreKey}`;

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                console.log('imgbb', result);
                if (result.success) {
                    const img = result.data.url;
                    const blog = {
                        title: data.title,
                        subject: data.subject,
                        media: data.media,
                        image: img
                    };

                    // SEND TO DATABASE
                    fetch(' https://obscure-sierra-27359.herokuapp.com/blogs', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(blog)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log('insert', inserted);
                            if (inserted.insertedId) {
                                Swal.fire(
                                    'Good job!',
                                    'সফলভাবে ব্লগ পোষ্ট করা হয়েছে !',
                                    'success'
                                )
                                reset();
                            }
                        })
                }
            })

    }
    return (
        <section>

            <div className='flex  justify-center items-center font-bensen'>
                <div className="card w-5/6 lg:w-3/6 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className='text-center text-3xl font-bold'>নতুন ব্লগ যোগ করুন</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="নাম / টাইটেল" className="input input-bordered w-full max-w-lg text-lg"
                                    {...register("title", {
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
                                <textarea type="text" placeholder="বিষয়বস্তু" className="textarea textarea-bordered w-full text-lg"
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

                            <div className="form-control w-full mb-3 max-w-lg">
                                <input type="text" placeholder="ছবি / ভিডিও লিঙ্ক" className="input input-bordered w-full max-w-lg text-lg"
                                    {...register("media")}
                                />
                            </div>
                            <div className="form-control w-full mb-3 max-w-lg">
                                <input type="file"
                                    className="input input-bordered w-full max-w-lg text-md"
                                    {...register("image")}
                                />
                            </div>
                            <input className='btn w-full font-normal text-2xl' type="submit" value='পোষ্ট করুন' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddBlog;