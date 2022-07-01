import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const SignUp = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);




    if(loading || gLoading){
        <button class="btn loading">loading</button>
    }


    let signInErrorMessage;

    if(error || gError){
        signInErrorMessage = <p className='text-red-400 pb-5 text-center'><small>{error?.message || gError?.message}</small></p>
    }

    if (gUser || user) {
        console.log(gUser);
    }

    const onSubmit = data => {
        console.log(data);
        createUserWithEmailAndPassword(data.email, data.password)
    }

    return (
        <div className='flex h-screen justify-center items-center'>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">রেজিস্ট্রেশন/সাইন-আপ</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">আপনার নাম</span>
                               
                            </label>
                            <input type="text" placeholder="আপনার নাম লিখুন" class="input input-bordered w-full max-w-xs"
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
                                <span class="label-text">আপনার ই-মেইল</span>
                               
                            </label>
                            <input type="email" placeholder="আপনার ই-মেইল লিখুন" class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "ই-মেইল আইডি দিতেই হবে"
                                },
                                pattern: {
                                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                  message: 'দয়া করে, ভ্যালিড ই-মেইল আইডি প্রদান করুন' // JS only: <p>error message</p> TS only support string
                                }
                              })} />
                            <label class="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-300">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-300">{errors.email.message}</span>}
                                
                            </label>
                        </div>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">পাসওয়ার্ড</span>
                               
                            </label>
                            <input type="password" placeholder="আপনার পাসওয়ার্ড" class="input input-bordered w-full max-w-xs"
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
                            <label class="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-300">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-300">{errors.password.message}</span>}
                                
                            </label>
                        </div>

                        {signInErrorMessage}
                        <input className='btn w-full font-bold text-2xl' type="submit" value='রেজিস্ট্রেশন/সাইন-আপ' />
                    </form>
                    <p className='text-center'><small>পূর্বেই রেজিস্ট্রেশন করেছেন? <Link className='text-secondary' to='/login'>লগ-ইন করুন</Link></small></p>

                    <div className="divider">অথবা</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-secondary font-bold">গুগল-এর মাধ্যমে লগিন করুন</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;