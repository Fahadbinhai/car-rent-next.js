
import Image from 'next/image';
import React from 'react';
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, TbCircleNumber4 } from "react-icons/tb";
import carSupport from '../../../public/images/bookCar.jpg';

const Support = () => {
    return (
        <section className='flex flex-col lg:flex-row justify-center items-center gap-16 py-14 px-4 2xl:-ml-30'>
            
            {/* Left side: Image */}
            <div className='w-full lg:w-1/2 flex justify-center'>
                <Image 
                    src={carSupport} 
                    alt='support' 
                    width={550} 
                    height={550} 
                    className='rounded-2xl object-cover' 
                />
            </div>

            {/* Right side: Features */}
            <div className='w-full lg:max-w-xl lg:space-y-5 2xl:space-y-12'>
                
                <div>
                    <div className='flex items-center gap-3'>
                        <TbCircleNumber1 className='w-7 h-7 bg-[#5937E0] text-white rounded-full' />
                        <p className='text-lg font-semibold'>Easy Booking Process</p>
                    </div>
                    <p className='text-base font-normal text-gray-500 mt-4 pl-10'>
                        Book your car online anytime, 24/7. Get instant confirmation with just a few clicks.
                    </p>
                </div>

                <div>
                    <div className='flex items-center gap-3'>
                        <TbCircleNumber2 className='w-7 h-7 bg-[#5937E0] text-white rounded-full' />
                        <p className='text-lg font-semibold'>Wide Range of Vehicles</p>
                    </div>
                    <p className='text-base font-normal text-gray-500 mt-4 pl-10'>
                        Choose from economy, SUV, or luxury cars. Both manual and automatic options are available.
                    </p>
                </div>

                <div>
                    <div className='flex items-center gap-3'>
                        <TbCircleNumber3 className='w-7 h-7 bg-[#5937E0] text-white rounded-full' />
                        <p className='text-lg font-semibold'>Affordable Pricing</p>
                    </div>
                    <p className='text-base font-normal text-gray-500 mt-4 pl-10'>
                        Enjoy competitive pricing with no hidden charges. Get daily or weekly discounts on rentals.
                    </p>
                </div>

                <div>
                    <div className='flex items-center gap-3'>
                        <TbCircleNumber4 className='w-7 h-7 bg-[#5937E0] text-white rounded-full' />
                        <p className='text-lg font-semibold'>Customer Support</p>
                    </div>
                    <p className='text-base font-normal text-gray-500 mt-4 pl-10'>
                        Our support team is available 24/7 to assist you. Roadside help is included for your peace of mind.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Support;
