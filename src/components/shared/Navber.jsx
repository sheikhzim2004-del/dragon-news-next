import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userImage from '@/assets/user.png'
import NavLink from './NavLink';

const Navber = () => {
    return (
        <div className='flex justify-between items-center container mx-auto my-4'>
            <div></div>
            <ul className='flex justify-center items-center gap-4'>
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
            </ul>
            <div className='flex justify-center items-center gap-4'>
                <Image src={userImage} alt='User Image'></Image>
                <button className='btn bg-pink-600 text-white'>Login</button>
            </div>
        </div>
    );
};

export default Navber;