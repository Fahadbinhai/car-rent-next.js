"use client"
import useAxiosInstance from '@/customHooks/axiosHooks/useAxiosInstance';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const DisplayCar = () => {

    const axiosInstance = useAxiosInstance();

    const {data,isLoading,error}= useQuery({
        queryKey:["allCars"],
        queryFn: async()=>{
            const res = await axiosInstance.get('getAllCar');
            return res.data;
        }
    })

    if(isLoading) return <p>Loading.....Please wait</p>
    if(error) return <p>Something went wrong</p>

    return (
        <div>
            <p> total cars {data.length}</p>
        </div>
    );
};

export default DisplayCar;