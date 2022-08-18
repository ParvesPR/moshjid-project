import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const AddSlider = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgStoreKey = '3528b3ade157fe6b5d8fedbb6b473c09';
    const handleOnSubmit = async (data) => {
        console.log(data)
        const image = data?.image[0];
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
                    const slider = {
                        image1: img,
                        image2: img,
                        title: data.title,
                        subTitle: data.subTitle,
                    };

                    // // SEND TO DATABASE
                    // const url = ' http://localhost:5000/committee';
                    // fetch(url, {
                    //     method: 'POST',
                    //     headers: {
                    //         'content-type': 'application/json',
                    //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    //     },
                    //     body: JSON.stringify(committee)
                    // })
                    //     .then(res => res.json())
                    //     .then(result => {
                    //         if (result.insertedId) {
                    //             Swal.fire(
                    //                 'Good job!',
                    //                 'Thank You',
                    //                 'success'
                    //             )
                    //             reset();
                    //         }
                    //     })
                }
            })
    };
    return (
        <section>

            <div className='flex  justify-center items-center font-bensen'>

                <div className="card w-5/6 mx-2 lg:w-3/6 lg:mx-0 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className='text-center text-3xl font-bold'>নতুন Slider যোগ করুন</h2>
                        <form onSubmit={handleSubmit(handleOnSubmit)}>

                            <div className="form-control w-full mb-3 max-w-lg">
                                <label className="text-sm text-cyan-500">First Image</label>
                                <input type="file"
                                    className="input input-bordered w-full max-w-lg text-md"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: "Please Select Image"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.image.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full mb-3 max-w-lg">
                                <label className="text-sm text-cyan-500">Second Image</label>
                                <input type="file"
                                    className="input input-bordered w-full max-w-lg text-md"
                                    {...register("image2", {
                                        required: {
                                            value: true,
                                            message: "Please Select Image"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.image2?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.image2.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="Add Title" className="input input-bordered w-full max-w-lg text-lg"
                                    {...register("title")} />
                                <label className="label">
                                </label>
                            </div>

                            <div className="form-control w-full max-w-lg">
                                <input type="text" placeholder="Add Sub-title" className="input input-bordered w-full max-w-lg text-lg"
                                    {...register("subTitle")} />
                                <label className="label">
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

export default AddSlider;