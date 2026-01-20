import React from 'react';
import  image from "../../assets/success-doctor.png"
import star from "../../assets/success-review.png"
import patient from "../../assets/success-patients.png"
import stuff from "../../assets/success-staffs.png"
import CountUp from 'react-countup';
import { useLocation } from 'react-router';


const Count = () => {
    const location = useLocation()
    if (location.pathname !== "/") {
        return null; 
    }
    
    


    return (
        <div className='max-w-5xl mx-auto my-5'>

            <h1 className='font-bold text-3xl text-center'>We Provide Best Medical Services</h1>
            <p className='text-[10px] text-center my-2'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className='grid gap-4 lg:grid-cols-4 sm:grid-cols-2 p-4'>

                <div className='bg-white p-4 space-y-2 rounded-[10px]'>
                    <img src={image} alt="" />
                    <h1 className='font-semibold text-4xl'>
                    <CountUp end={199} duration={6.75} start={1} />+


                    </h1>
                    <p>Total Doctors</p>
                </div>

                <div className='bg-white p-4 space-y-2 rounded-[10px]'>
                    <img src={star} alt="" />
                    <h1 className='font-semibold text-4xl'>
                    <CountUp end={467} duration={6.75} start={1} />

                        +</h1>
                    <p>Total Reviews</p>
                </div>

                <div className='bg-white p-4 space-y-2 rounded-[10px]'>
                    <img src={patient} alt="" />
                    <h1 className='font-semibold text-4xl'>
                    <CountUp end={1900} duration={6.75} start={1} />

                        +</h1>
                    <p>Patients</p>
                </div>

                <div className='bg-white p-4 space-y-2 rounded-[10px]'>
                    <img src={stuff} alt="" />
                    <h1 className='font-semibold text-4xl'>
                    <CountUp end={300} duration={6.75} start={1} />

                        +</h1>
                    <p>Total Stuffs</p>
                </div>
                



              </div>

        </div>
    );
};

export default Count;