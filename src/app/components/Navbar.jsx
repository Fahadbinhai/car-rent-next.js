'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import carLogo from '../../../public/images/carlogo.png'
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {

    const pathname = usePathname()

    const links = (
        <div className='flex gap-2 lg:gap-10 flex-col lg:flex-row'>
            <Link
                href='/'
                className={pathname === '/' ? 'text-blue-700 underline font-bold' : ''}
            >Home</Link>
            <Link href='/displayAllCar'
                className={pathname === '/displayAllCar' ? 'text-blue-700 underline font-bold' : ''}
            >All Cars</Link>
            <Link
                href='/service'
                className={pathname === '/service' ? 'text-blue-700 underline font-bold' : ''}
            >Service</Link>

        </div>
    )


    return (
        <div className="navbar bg-base-100 lg:px-10 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <Image className='hidden lg:block' src={carLogo} alt='logo' width={50} height={50}></Image>
                    <a className="text-xl font-bold">Car Rental</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex items-center gap-5'>
                    <div className='bg-[#5937E0] p-3 rounded-full text-white'>
                        <FaPhone />
                    </div>
                    <div>
                        <p>Need help</p>
                        <p className='font-semibold'>+92622145</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;