"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLoginFunc = (data) => {
        // console.log(data, "data")
    }
    // console.log(errors, "error");



    return (
        <div className='min-h-[80hv] flex flex-col justify-center items-center mt-6 bg-slate-100 container mx-auto rounded-xl p-8'>
            <div className='rounded-xl bg-white p-4'>
                <h1 className='text-4xl font-bold text-center'>Login Your Account</h1>
                <div>
                    <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email Address</legend>
                            <input
                                type="email"
                                {...register("email", { required: "The Email is requered" })}
                                className="input border-0 w-full bg-slate-100 rounded-xl"
                                placeholder="Type here Yout Email" />
                        </fieldset>
                        {errors.email && <p className='text-red-600'><small>{errors.email.message}</small></p>}


                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Password</legend>
                            <input
                                type="password"
                                {...register("password", { required: 'Password is Requered!' })}
                                className="input border-0 w-full bg-slate-100 rounded-xl"
                                placeholder="Type here Yout Password" />
                        </fieldset>
                        {errors.password && <p className='text-red-600'><small>{errors.password.message}</small></p>}
                        <button className='btn w-full bg-slate-800 text-white rounded-xl mb-4'>Login</button>
                    </form>
                    <p>Dont have an account? <Link className='text-blue-500 text-md font-medium' href={"/register"}>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;