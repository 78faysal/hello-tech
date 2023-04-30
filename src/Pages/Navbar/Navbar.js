import React from 'react';
import { useState } from 'react';
import navLogo from '../../Images/logo.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (

        <nav className="bg-white p-5 m-0 fixed w-full shadow">
            <div className='container md:flex md:items-center md:justify-between mx-auto'>
                <div className="">
                    <span className="self-center text-2xl text-gray-800 font-mono font-bold whitespace-nowrap dark:text-white">
                        <img className='h-16 inline me-2' src={navLogo} alt="" />
                        </span>

                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-7 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon>
                </div>

                {/* md:z-auto z-auto  */}
                <ul className={`md:flex md:items-center md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-3 md:pl-0 pl-5 z-auto transition-all duration-500 ease-in ${open ? 'top-20 opacity-100': 'top-[-490px]'} md:opacity-100 opacity-0`}>
                    <li className='mx-3 my-4 md:my-0 '>
                        <a href="" className='text-xl hover:text-indigo-500 duration-500'>Home</a>
                    </li>
                    <li className='mx-3 my-4 md:my-0'>
                        <a href="" className='text-xl hover:text-indigo-500 duration-500'>About</a>
                    </li>
                    <li className='mx-3 my-4 md:my-0'>
                        <a href="" className='text-xl hover:text-indigo-500 duration-500'>Courses</a>
                    </li>
                    <li className='mx-3 my-4 md:my-0'>
                        <a href="" className='text-xl hover:text-indigo-500 duration-500'>FAQ</a>
                    </li>
                    <li className='mx-3 my-4 md:my-0'>
                        <a href="" className='text-xl hover:text-indigo-500 duration-500'>Blog</a>
                    </li>
                </ul>
            </div>

        </nav>

    );
};


export default Navbar;