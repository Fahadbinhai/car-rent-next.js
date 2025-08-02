import React from 'react';
import Image from 'next/image';
import location from '../../../public/images/location.png'
import carIcon from '../../../public/images/car.png'
import savings from '../../../public/images/wallet-62.png'


const Information = () => {
    return (
        <div className='mb-20'>
            <section className='grid grid-cols-12 place-items-center'>
                <div className='col-span-4 '>
                    <Image src={location} alt='location' width={200} height={180}></Image>
                    <p className='text-lg text-center font-semibold mb-3'>Availability </p>
                    <p className='text-sm text-center'>Available all over your <br /> country and city </p>
                </div>
                <div className='col-span-4'>
                    <Image src={carIcon} alt='location' width={200} height={180}></Image>
                    <p className='text-lg text-center font-semibold mb-3'>Comfort </p>
                    <p className='text-sm text-center'>Smooth ride, comfy seat <br /> — just sit back and relax</p>
                </div>
                <div className='col-span-4'>
                    <Image src={savings} alt='location' width={200} height={180}></Image>
                    <p className='text-lg text-center font-semibold mb-3'>Savings </p>
                    <p className='text-sm text-center'> Save more every ride! <br />
                        No hidden fees, just smooth deals</p>
                </div>
            </section>
        </div>
    );
};

export default Information;