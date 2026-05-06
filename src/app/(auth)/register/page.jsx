"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const handleRegisterFunc = async (data) => {
        const { name, email, password, photo } = data;
        console.log(name, email)

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        })
        console.log(res, "res")
        console.log(error, "error")

        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("Signup Successfull");
        }
    }
    // console.log(errors, "error");



    return (
        <div className='min-h-[80hv] flex flex-col justify-center items-center mt-6 bg-slate-100 container mx-auto rounded-xl p-8'>
            <div className='rounded-xl bg-white p-4'>
                <h1 className='text-4xl font-bold text-center'>Register Your Account</h1>
                <div>
                    <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Your Name</legend>
                            <input
                                type="text"
                                {...register("name", { required: "The Name is requered" })}
                                className="input border-0 w-full bg-slate-100 rounded-xl"
                                placeholder="Your Name" />
                        </fieldset>
                        {errors.name && <p className='text-red-600'><small>{errors.name.message}</small></p>}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Photo URL</legend>
                            <input
                                type="text"
                                {...register("photo", { required: "The Photo URL is requered" })}
                                className="input border-0 w-full bg-slate-100 rounded-xl"
                                placeholder="Photo URL" />
                        </fieldset>
                        {errors.photo && <p className='text-red-600'><small>{errors.photo.message}</small></p>}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email Address</legend>
                            <input
                                type="email"
                                {...register("email", { required: "The Email is requered" })}
                                className="input border-0 w-full bg-slate-100 rounded-xl"
                                placeholder="Type here Yout Email" />
                        </fieldset>
                        {errors.email && <p className='text-red-600'><small>{errors.email.message}</small></p>}


                        <fieldset className="fieldset relative">
                            <legend className="fieldset-legend">Password</legend>
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register("password", {
                                    required: 'Password is Requered!',
                                    minLength: { value: 8, message: "Password must be at least 8 characters" },
                                    maxLength: { value: 15, message: "Password must be less than 15 characters" },
                                    pattern: { value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, message: "Password must contain at least one uppercase letter, one number, and one special character" },
                                })}
                                className="input border-0 w-full bg-slate-100 rounded-xl"
                                placeholder="Type here Yout Password" />
                            <button
                                type='button'
                                className='absolute top-4 right-4 text-xl text-amber-900 cursor-pointer'
                                onClick={() => setShowPassword(!showPassword)}
                            >{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                        {errors.password && <p className='text-red-600'><small>{errors.password.message}</small></p>}
                        </fieldset>

                        <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    {...register("terms", { required: true })}
                                />
                                Accept Terms & Conditions
                            </label>
                            {errors.terms && (
                                <p className="text-red-500 text-sm">Please accept terms</p>
                            )}
                        <button className='btn w-full bg-slate-800 text-white rounded-xl mb-4'>Register</button>
                    </form>
                    <p>Already have an account?<Link className='text-blue-500 text-md font-medium' href={"/login"}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;