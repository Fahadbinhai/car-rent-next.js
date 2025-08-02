"use client"
import Image from 'next/image';
import React from 'react';
import { FaKey, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa';
import bannerImg from '../../../public/images/bannerCar.jpg';
import Swal from 'sweetalert2';

const Banner = () => {

    const join = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "You have join successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className='w-full h-[300px] p-2 lg:w-[1250px] lg:h-[85vh] 2xl:w-[1800px] 2xl:h-[80vh] mx-auto lg:p-6'>
            <figure className='w-full h-full flex items-center relative'>
                <Image src={bannerImg} alt='banner' className='w-full h-full object-cover rounded-2xl' />

                <div className='w-full h-full absolute rounded-2xl backdrop-blur-xs bg-white/5 flex items-center justify-center p-6'>
                    <section className='flex flex-col lg:flex-row justify-center items-center gap-30 2xl:gap-[350px] w-full max-w-5xl lg:max-w-6xl 2xl:max-w-7xl'>
                        {/* Left Text Section */}
                        <div className='text-white max-w-xl'>
                            <p className='text-2xl lg:text-5xl font-semibold lg:font-bold mb-2'>Experience the road like never before</p>
                            <p className='mb-4 text-xs lg:text-sm lg:font-medium'>Your dream ride is just a click away — anywhere, anytime. Hassle-free booking, smooth journeys guaranteed!</p>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">View all Cars</button>
                        </div>

                        {/* Member Benefits Card */}
                        <div className='bg-white bg-opacity-80 rounded-lg p-6 text-gray-800 w-full max-w-xs 2xl:w-[400px]  shadow-md flex items-center justify-center hidden lg:block'>
                            <div className='text-center'>
                                <h2 className='text-2xl font-bold mb-4 flex items-center justify-center gap-2'>
                                    🎉 Join & Ride Smart!
                                </h2>
                                <p className='mb-4'>Become a member and unlock:</p>
                                <ul className='mb-6 space-y-3 text-left'>
                                    <li className='flex items-center gap-3'>
                                        <FaKey className='text-blue-600' />
                                        <span>Early bookings</span>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <FaMoneyBillWave className='text-green-600' />
                                        <span>Exclusive discounts</span>
                                    </li>
                                    <li className='flex items-center gap-3'>
                                        <FaShieldAlt className='text-red-600' />
                                        <span>Travel insurance</span>
                                    </li>
                                </ul>
                                <button onClick={() => join()} className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'>
                                    Join Now — It’s Free
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </figure>
        </div>
    );
};

export default Banner;
