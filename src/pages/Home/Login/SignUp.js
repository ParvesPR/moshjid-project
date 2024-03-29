import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { useState } from 'react';
import { AiFillEye } from "react-icons/ai";
import signUp from '../../../assests/images/signup.jpg'
import NavBar from '../../Shared/NavBar/NavBar';
import useToken from '../../../hooks/useToken';

const SignUp = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth)

    const [token] = useToken(gUser || user)
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    let signInErrorMessage;

    if (error || gError || updateError) {
        signInErrorMessage = <p className='text-red-400 pb-5 text-center'><small>{error?.message || gError?.message}</small></p>
    }

    if (token) {
        navigate(from, { replace: true })
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };

    const togglePassword = () => {
        setPasswordShow(!passwordShow);
    }

    return (
        <section className='font-bensen'>
            <div className='pt-10'>
                <NavBar></NavBar>
            </div>
            <div className='flex flex-col lg:flex-row justify-evenly items-center gap-5'>
                <img className='w-2/4' src={signUp} alt="" />
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">রেজিস্ট্রেশন/সাইন-আপ</h2>


                        <form onSubmit={handleSubmit(onSubmit)}>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-lg">আপনার নাম</span>

                                </label>
                                <input type="text" placeholder="আপনার নাম লিখুন" className="text-md input input-bordered w-full max-w-xs"
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
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-lg">আপনার ই-মেইল</span>

                                </label>
                                <input type="email" placeholder="আপনার ই-মেইল লিখুন" className="text-md input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "ই-মেইল আইডি দিতেই হবে"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'দয়া করে, সঠিক ই-মেইল আইডি প্রদান করুন' // JS only: <p>error message</p> TS only support string
                                        }
                                    })} />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600 text-lg">{errors.email.message}</span>}

                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-lg">পাসওয়ার্ড</span>

                                </label>
                                <div className='input-group'>
                                    <input type={passwordShow ? "text" : "password"} placeholder="আপনার পাসওয়ার্ড" className="text-md input input-bordered w-full max-w-xs"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "পাসওয়ার্ড দিতেই হবে"
                                            },
                                            minLength: {
                                                value: 8,
                                                message: 'ন্যূনতম ৮ সংখ্যার পাসওয়ার্ড হবে' // JS only: <p>error message</p> TS only support string
                                            }
                                        })} />
                                    <span className='bg-[#fefefe43] border border-[#9CA3AF]'><i className='text-white cursor-pointer text-sm' onClick={togglePassword}><AiFillEye className='text-lg text-[#a6a6a6da]'></AiFillEye></i></span>
                                </div>
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-600 text-lg">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600 text-lg">{errors.password.message}</span>}

                                </label>
                            </div>

                            {signInErrorMessage}
                            <input className='btn w-full font-semibold text-xl' type="submit" value='রেজিস্ট্রেশন/সাইন-আপ' />
                        </form>
                        <p className='text-center text-xl'><small>পূর্বেই রেজিস্ট্রেশন করেছেন? <Link className='text-secondary' to='/login'>লগ-ইন করুন</Link></small></p>

                        <div className="divider">অথবা</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-secondary font-semibold text-lg">গুগল-এর মাধ্যমে লগিন করুন</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;