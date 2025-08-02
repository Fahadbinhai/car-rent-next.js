import Image from 'next/image';
import React from 'react';
import { FaKey, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa';
import bannerImg from '../../../public/images/bannerCar.jpg';

const Banner = () => {
    return (
        <div className='w-full h-[300px] p-2 lg:w-[1250px] lg:h-[85vh] 2xl:w-[1800px] 2xl:h-[80vh] mx-auto lg:p-6'>
            <figure className='w-full h-full flex items-center relative'>
                <Image src={bannerImg} alt='banner' className='w-full h-full object-cover rounded-2xl' />

                <div className='w-full h-full absolute rounded-2xl backdrop-blur-xs bg-white/5 flex flex-col justify-between p-6'>
                    <section className='flex justify-center items-center'>
                        <div>
                            <p>Experience the road like never before</p>
                            <p>Your dream ride is just a click away — anywhere, anytime. Hassle-free booking, smooth journeys guaranteed!</p>
                            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">View all Cars</button>
                        </div>

                        {/* Member Benefits Card Added Here */}
                        <div className='bg-white bg-opacity-80 rounded-lg p-6 max-w-sm shadow-lg text-gray-800'>
                            <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
                                🎉 Join & Ride Smart!
                            </h2>
                            <p className='mb-4'>Become a member and unlock:</p>
                            <ul className='mb-6 space-y-3'>
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
                            <button className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'>
                                Join Now — It’s Free
                            </button>
                        </div>
                    </section>
                </div>
            </figure>
        </div>
    );
};

export default Banner;
