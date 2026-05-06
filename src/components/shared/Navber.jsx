"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userImage from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navber = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    // if (status === "loading") return <p>Loading...</p>;

    console.log(isPending, "isPending")
    return (
        <div className='flex justify-between items-center container mx-auto my-4'>
            <div></div>
            <ul className='flex justify-center items-center gap-4'>
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
            </ul>
            {isPending ? <span className="loading loading-infinity loading-xl"></span>
                :
                user ? <div className='flex justify-center items-center gap-4'>
                    <p className='text-lg text-fuchsia-900 font-bold'>Hello, {user?.name}</p>
                    <Image src={user?.image || userImage} alt='User Image' width={40} height={40} className='rounded-full'></Image>
                    <button 
                    className='btn bg-pink-600 text-white'
                    onClick={async() => await authClient.signOut()}
                    >Logout</button>
                </div>
                    :
                    <Link href="/login" className='btn bg-pink-600 text-white'>Login</Link>}

        </div>
    );
};

export default Navber;