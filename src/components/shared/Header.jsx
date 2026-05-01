import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='text-center flex flex-col gap-3 my-8'>
            <Image src={logo} alt='Logo' width={300} height={200} className='mx-auto'></Image>
            <p className='text-xl text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium text-[#706F6F]'>{format(new Date(),"EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;