import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);




    if(loading || gLoading){
        <button class="btn loading">loading</button>
    }


    let signInErrorMessage;

    if(error || gError){
        signInErrorMessage = <p className='text-red-400 pb-5 text-center'><small>{error?.message || gError?.message}</small></p>
    }

    if (gUser) {
        console.log(gUser);
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <div className='flex h-screen justify-center items-center'>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                               
                            </label>
                            <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is Required"
                                },
                                pattern: {
                                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                  message: 'Please! Enter a valid Email' // JS only: <p>error message</p> TS only support string
                                }
                              })} />
                            <label class="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-300">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-300">{errors.email.message}</span>}
                                
                            </label>
                        </div>


                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                               
                            </label>
                            <input type="password" placeholder="Your Password" class="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is Required"
                                },
                                minLength: {
                                  value: 8,
                                  message: 'Must be 8 character or longer' // JS only: <p>error message</p> TS only support string
                                }
                              })} />
                            <label class="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-300">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-300">{errors.password.message}</span>}
                                
                            </label>
                        </div>

                        {signInErrorMessage}
                        <input className='btn w-full' type="submit" value='Login' />
                    </form>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-secondary font-bold">Login with Google</button>
                </div>
            </div>
        </div>

    );
};

export default Login;