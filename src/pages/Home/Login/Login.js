import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import NavBar from '../../Shared/NavBar/NavBar';
import './Login.css';
import { useState } from 'react';
import { AiFillEye } from "react-icons/ai";

const Login = () => {
    const [passwordShow, setPasswordShow] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

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
        signInWithEmailAndPassword(data.email, data.password)
    };

    const togglePassword = () => {
        setPasswordShow(!passwordShow);
    }

    return (
        <section className='login-section'>
            <div className='pt-10'>
                <NavBar></NavBar>
            </div>
            <div className='login-form flex h-screen justify-center items-center'>

                <div className="card w-96 bg-[#0F2834] shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-3xl font-semibold text-white">লগইন</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs text-white">
                                <label className="label">
                                    <span className="label-text text-white text-lg">আপনার ই-মেইল</span>

                                </label>
                                <input type="email" placeholder="আপনার ই-মেইল লিখুন" className="bg-[#00000043] shadow-xl border-blue-500 input input-bordered w-full max-w-xs"
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
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-400 text-lg">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400 text-lg">{errors.email.message}</span>}

                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-white text-lg">পাসওয়ার্ড</span>
                                </label>

                                <div className='input-group'>
                                    <input type={passwordShow ? "text" : "password"} placeholder="আপনার পাসওয়ার্ড" className="bg-[#00000043] shadow-xl border-blue-500 text-white input input-bordered w-full max-w-xs"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "পাসওয়ার্ড দিতেই হবে"
                                            },
                                            minLength: {
                                                value: 8,
                                                message: 'ন্যূনতম ৮ সংখ্যার পাসওয়ার্ড দিতে হবে' // JS only: <p>error message</p> TS only support string
                                            }
                                        })}
                                    />
                                    <span className='bg-[#00000043] border border-blue-500'><i className='text-white cursor-pointer text-sm' onClick={togglePassword}><AiFillEye className='text-lg'></AiFillEye></i></span>
                                </div>
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-400 text-lg">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-400 text-lg">{errors.password.message}</span>}

                                </label>
                            </div>

                            {signInErrorMessage}
                            <input className='btn w-full text-2xl' type="submit" value='লগইন করুন' />
                        </form>
                        <p className='text-center text-yellow-200 text-lg'><small>আমাদের ওয়েবসাইটে নতুন? <Link className='text-secondary' to='/signup'>রেজিস্ট্রেশন/সাইন-আপ করুন</Link></small></p>

                        <div className="divider text-white">অথবা</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-secondary text-xl">গুগল-এর মাধ্যমে লগইন করুন</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Login;