import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import { useState } from 'react';
import { AiFillEye } from "react-icons/ai";
import signUp from '../../../assests/images/signup.jpg'
import NavBar from '../../Shared/NavBar/NavBar';

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
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    let signInErrorMessage;

    if (error || gError) {
        signInErrorMessage = <p className='text-red-400 pb-5 text-center'><small>{error?.message || gError?.message}</small></p>
    }

    if (gUser || user) {
        navigate(from, { replace: true })
        console.log(gUser);
    }

    const onSubmit = data => {
        console.log(data);
        createUserWithEmailAndPassword(data.email, data.password)
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
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-bold">রেজিস্ট্রেশন/সাইন-আপ</h2>


                        <form onSubmit={handleSubmit(onSubmit)}>


                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text text-lg">আপনার নাম</span>

                                </label>
                                <input type="text" placeholder="আপনার নাম লিখুন" class="text-md input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "নাম দিতেই হবে"
                                        }
                                    })} />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-300">{errors.name.message}</span>}


                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text text-lg">আপনার ই-মেইল</span>

                                </label>
                                <input type="email" placeholder="আপনার ই-মেইল লিখুন" class="text-md input input-bordered w-full max-w-xs"
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
                                <label class="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-300">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-300">{errors.email.message}</span>}

                                </label>
                            </div>


                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text text-lg">পাসওয়ার্ড</span>

                                </label>
                                <div className='input-group'>
                                    <input type={passwordShow ? "text" : "password"} placeholder="আপনার পাসওয়ার্ড" class="text-md input input-bordered w-full max-w-xs"
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
                                <label class="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-300">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-300">{errors.password.message}</span>}

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