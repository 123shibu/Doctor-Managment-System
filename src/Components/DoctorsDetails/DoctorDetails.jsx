import React from "react";
import { FaRegRegistered } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';


import {  useLoaderData, useParams } from "react-router";
import { BsExclamationCircle } from "react-icons/bs";
import { setStorage } from "../../Utilities";

const DoctorDetails = () => {
  const dataLoad = useLoaderData();
  const doctorsData = useParams();
  const { id } = doctorsData;
  const doctor = dataLoad.find((data) => data.id === parseInt(id));
  

  const handleAdd = () => {
    toast("Appointment Scheduled !");


        setStorage(doctor)


   }

  const {
    name,
    image,
    education,
    availabilityDay,
    fees,
    address,
    registrationNumber,
    speciality,
  } = doctor;
  return (
    <div >
      <div className="w-full rounded-2xl bg-white p-2 my-4">
        <h2 className="font-semibold text-2xl text-center ">
          Doctor’s Profile Details
        </h2>
        <p className="text-center my-2 text-[10px]">
          A doctor profile typically includes a biography or summary of a
          doctor's <br />
          expertise, qualifications, and experience, aimed at helping patients{" "}
          <br />
          choose the right doctor.{" "}
        </p>
      </div>
      <ToastContainer />

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm  rounded-lg shadow-2xl" />
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="my-2">{education}</p>
            <p className="my-2 font-semibold">{speciality}</p>
            <p className="my-2 text-gray-700">Working add </p>
            <h3 className="font-semibold"> {address}</h3>
            <p className="my-2 border-b-1 border-t-1 p-2 border-dashed  flex gap-2">
              {" "}
              <FaRegRegistered size={20} />
              {registrationNumber}
            </p>
            <div className="flex gap-2 items-center flex-wrap my-3">
              <h2 className="font-semibold ">Availability:</h2>
              {availabilityDay.split(",").map((day, index) => (
                <button
                  key={index}
                  className="w-[120px] text-green-500 bg-green-100 rounded-2xl p-0.5 cursor-pointer border-1"
                >
                  {day.trim()}
                </button>
              ))}
            </div>

            <h2 className="font-semibold my-2">
              {" "}
              Consultation Fee : <span className="text-blue-600"> {fees}</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="my-6 w-full p-3 bg-white rounded-[10px]  space-y-4">
        <h1 className="font-semibold text-center text-1.5xl">
          Book an Appointment
        </h1>
        <div className="flex  justify-between border-t-1 border-b-1 p-2 border-dashed">
          <h1>Availability</h1>
          <button className=" w-[190px] border-1 text-green-500 bg-green-100 rounded-2xl p-0.5  cursor-pointer">
            Doctor Available Today
          </button>
        </div>

        <div className="flex justify-center">
          <button className=" flex gap-2 text-[10px] justify-center w-[70%] text-orange-500 bg-orange-100 rounded-2xl p-1 ">
            {" "}
            <BsExclamationCircle size={14} />
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.{" "}
          </button>
        </div>

         
        <div className="flex justify-center">

          <button onClick={handleAdd} className=" w-[70%] border-1 border-blue-300 bg-blue-500 text-white font-semibold hover:bg-[#4242e6] rounded-2xl p-1  cursor-pointer">
            Book Appointment Now{" "}
          </button>
          
          </div>

        
      </div>
    </div>
  );
};

export default DoctorDetails;
