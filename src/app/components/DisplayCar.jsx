"use client"
import useAxiosInstance from '@/customHooks/axiosHooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const DisplayCar = () => {
    const axiosInstance = useAxiosInstance();

    const { data, isLoading, error } = useQuery({
        queryKey: ["allCars"],
        queryFn: async () => {
            const res = await axiosInstance.get('getAllCar');
            return res.data;
        }
    })

    if (isLoading) return <p>Loading.....Please wait</p>
    if (error) return <p>Something went wrong</p>

    return (
        <section className='p-5'>
            <p className="text-lg font-semibold mb-5">
                Total Available cars : {data?.length}
            </p>

            {/* Responsive Grid with min-width fix */}
            <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6'>
                {
                    data?.map((car) => (
                        <div
                            key={car._id}
                            className="card bg-base-100 w-full shadow-md border rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                        >
                            <figure>
                                <img
                                    className='w-full h-56 object-cover p-2 rounded-xl'
                                    src={car.carImage}
                                    alt={car.carName}
                                />
                            </figure>
                            <div className="card-body">
                                <div>
                                    <h2 className="card-title">{car.carName}</h2>
                                    <p className="text-sm text-green-500">Reg. - {car.registration}</p>
                                </div>

                                <span className='flex justify-between text-sm text-gray-600'>
                                    <p>Type: {car.carType}</p>
                                    <p>Fuel: {car.fuelType}</p>
                                </span>
                                <span className='flex justify-between text-sm text-gray-600'>
                                    <p>Gear: {car.gearType}</p>
                                    <p>Sits: {car.totalSits}</p>
                                </span>
                                <span className='flex justify-between text-sm text-gray-600'>
                                    <p>Color: {car.carColor}</p>
                                    <p>Costing per day</p>
                                </span>

                                <div className="card-actions justify-end mt-6">
                                    <button className="btn btn-primary">
                                        Cost: ${car.perDayPrice}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default DisplayCar;
