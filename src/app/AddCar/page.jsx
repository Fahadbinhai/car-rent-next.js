'use client'
import useAxiosInstance from '@/customHooks/axiosHooks/useAxiosInstance';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddCar = () => {

    const [uploadingImg, setUploadingImg] = useState(null)
    const [fuel, setFuel] = useState('')
    const [gear, setGear] = useState('')
    const axiosInstance = useAxiosInstance()

    // uploading photo
    const handleUploadImage = async () => {

        if (!uploadingImg) return

        const formData = new FormData();
        formData.append("image", uploadingImg)

        const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`, {
            method: "POST",
            body: formData
        })

        const data = await res.json()


        return data?.data?.url
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        // const imgUrl = await url
        const imgUrl = await handleUploadImage()
        // console.log(imgUrl)

        if (!imgUrl) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "something went wrong!!!",
                showConfirmButton: false,
                timer: 1500
            });
        }


        const form = e.target;
        const carName = form.car.value;
        const carType = form.carType.value;
        const registration = form.registration.value;
        const fuelType = fuel;
        const gearType = gear;
        const totalSits = form.capacity.value;
        const perDayPrice = form.price.value;
        const carColor = form.color.value;
        const carImage = imgUrl;


        const carDetails = {
            carName, carType, registration, fuelType, gearType, totalSits, perDayPrice, carColor, carImage
        }

        try {
            const response = await axiosInstance.post('/allCars', carDetails)

            if (response.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Uploaded",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }
        catch (err) {
            if (err) {
                Swal.fire({
                    title: "Something going wrong!",
                    icon: "warning",
                    draggable: true
                });
            }
        }


        console.log(carDetails);
        setFuel('');
        setGear('');
        form.reset();
    }

    return (
        <div>
            <section className='w-[75%] mx-auto mt-14 px-20 py-10 bg-[#F5F5F5]'>
                <h3 className='text-4xl font-bold text-center mt-10'>Add car for Rent</h3>

                {/* form for data from the user. currently not adding it in the nav bar. It's only accessible by url box */}

                <form onSubmit={handleFormSubmit} className='mx-28 mt-10'>

                    <div className='grid grid-cols-2 gap-5'>
                        {/* car name */}
                        <div>
                            <label className="block font-medium mb-1">1.Car Name</label>
                            <input
                                type="text"
                                name="car"
                                placeholder="e.g. Toyota Corolla"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* car type */}
                        {/* future e select diye change kora hobe */}
                        <div>
                            <label className="block font-medium mb-1">2.Car Type</label>
                            <input
                                type="text"
                                name="carType"
                                placeholder="e.g. SUV"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Registration Number */}
                        <div>
                            <label className="block font-medium mb-1">3.Registration Number</label>
                            <input
                                type="text"
                                name="registration"
                                placeholder="e.g. 1XX-AXX-XXXX"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Fuel Type */}
                        <div>
                            <label className="block font-medium mb-1">4.Fuel Type</label>
                            {/* <input
                                type="text"
                                name="fuel"
                                placeholder="e.g. Petrol"
                                className="input input-bordered w-full"
                                required
                            /> */}
                            <select
                                value={fuel}
                                className="input input-bordered w-full"
                                onChange={(e) => setFuel(e.target.value)}
                            >

                                <option className='text-center' value="" disabled >-----select one-----</option>
                                <option value="Petrol">Petrol</option>
                                <option value="octane">Octane</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                            </select>
                        </div>

                        {/* Transmission Type */}
                        <div>
                            <label className="block font-medium mb-1">5.Transmission Type</label>
                            {/* <input
                                type="text"
                                name="gear"
                                placeholder="Manual/Auto"
                                className="input input-bordered w-full"
                                required
                            /> */}
                            <select className="input input-bordered w-full"
                                value={gear}
                                onChange={(e) => setGear(e.target.value)}
                            >
                                <option className='text-center' value='' disabled >-----select one-----</option>
                                <option value="Auto">Auto</option>
                                <option value="Manual">Manual</option>

                            </select>
                        </div>

                        {/* capacity  */}
                        <div>
                            <label className="block font-medium mb-1">6.Seating Capacity</label>
                            <input
                                type="number"
                                name="capacity"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Rental Price per Day */}
                        <div>
                            <label className="block font-medium mb-1">7.Rental Price per Day</label>
                            <input
                                type="number"
                                name="price"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* color */}
                        <div>
                            <label className="block font-medium mb-1">8.Color</label>
                            <input
                                type="text"
                                name="color"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* car image */}
                        <div>
                            <label className="block font-medium">9.Car Image</label>
                            <input
                                type="file"
                                onChange={(e) => { setUploadingImg(e.target.files[0]) }}
                                className="input input-bordered w-full cursor-pointer"
                                required
                            />
                        </div>
                    </div>

                    <button className='btn btn-primary w-full mt-10 hover:bg-blue-600' type='submit'> Submit </button>

                </form>
            </section>
        </div >
    );
};

export default AddCar;