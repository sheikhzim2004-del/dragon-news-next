import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSideBar = () => {
  return (
    <div>
      <h2 className="text-xl font-medium text-left mb-3">Login With</h2>
      <div>
        <button className="btn w-full mb-2 p-4 border border-blue-500 text-blue-500 rounded-md">
          <FaGoogle />
          Login With Google</button>
        <button className="btn w-full mb-2 p-4 border border-gray-800 text-gray-800 rounded-md">
          <FaGithub />
          Login With GitHub</button>
        <button className="btn w-full mb-2 p-4 border border-blue-700 text-blue-700 rounded-md">
          <FaFacebook />
          Login With Facebook</button>
      </div>
      <div>
        <h2 className="text-xl font-medium text-left mb-3">Find us on</h2>
        <ul className='flex flex-col gap-1'>
          <li className='flex justify-center items-center gap-3 font-normal text-[16px] cursor-pointer hover:bg-gray-200 p-2 rounded-md border'><FaFacebook className='text-blue-600' /> Facebook</li>
          <li className='flex justify-center items-center gap-3 font-normal text-[16px] cursor-pointer hover:bg-gray-200 p-2 rounded-md border'><FaTwitter className='text-black' /> Twitter</li>
          <li className='flex justify-center items-center gap-3 font-normal text-[16px] cursor-pointer hover:bg-gray-200 p-2 rounded-md border'><FaInstagram className='text-red-700' /> Instagram</li>
        </ul>
      </div>
      <div className=' my-2 bg-gray-200 rounded-md p-4 pb-50'>
        <h2 className='text-xl font-medium text-left'>Q-zone</h2>
        <p className='text-[14px]'>I will add this section later.......</p>
      </div>
    </div>
  );
};

export default RightSideBar;