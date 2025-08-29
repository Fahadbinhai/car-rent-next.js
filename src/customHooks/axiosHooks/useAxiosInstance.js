import axios from 'axios';
import React from 'react';



// creating axios instance outside 

const axiosInstance = axios.create({
    baseURL:'http://localhost:5000'
})



const useAxiosInstance = () => {


    return axiosInstance;
};

export default useAxiosInstance;