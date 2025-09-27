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
console.log(data)
    if (isLoading) return <p>Loading.....Please wait</p>
    if (error) return <p>Something went wrong</p>

    return (
        <section>
            <p> Total Available cars : {data.length}</p>

            <div className='grid grid-cols-4 gap-5'>
                {
                    data.map((car) => (
                        <div key={car._id} className="card bg-base-100 w-96 shadow-sm border-2">
                            <figure>
                                <img
                                    className='w-full p-2 rounded-2xl'
                                    src={car.carImage}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
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