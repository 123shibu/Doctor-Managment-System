import React from 'react';
import { FaRegRegistered } from "react-icons/fa6";
import { Link } from "react-router";

const SectionCard = ({ singleData }) => {
    

    const { name, image, speciality, experience, registrationNumber,id } = singleData;

    return (
        <div>
            <div>
                  <div className="card bg-base-100  shadow-sm">
                    <figure className="px-10 pt-10">
                      <img
                        src={image}
                        alt="image"
                        className="rounded-xl h-[260px] bg-cover w-full"
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <div className="flex gap-1">
                        <button className=" w-[90px] text-green-500 bg-green-100 rounded-2xl p-0.5 border-1 cursor-pointer border-blue-400">
                          Available
                        </button>
                        <button className=" w-[160px] p-0.5 bg-blue-100 text-blue-500 rounded-2xl border-1 cursor-pointer border-blue-400">
                          {" "}
                          Experience : {experience}
                        </button>
                      </div>
                      <h2 className="card-title">{name}</h2>
                      <p>{speciality}</p>
                      <p className="flex gap-1 border-t-1 border-dashed p-2">
                        {" "}
                        <FaRegRegistered size={18} /> {registrationNumber}{" "}
                      </p>
                      <div className="card-actions">
                        <Link to={`/DoctorsDetails/${id}`}>
                        <button className=" w-[250px] text-blue-600 hover:bg-blue-100  rounded-2xl p-2 border-1 cursor-pointer border-blue-400">
                          View Details
                        </button></Link>
                      </div>
                    </div>
                      </div>
            
            
                </div>




            
        </div>
    );
};

export default SectionCard;