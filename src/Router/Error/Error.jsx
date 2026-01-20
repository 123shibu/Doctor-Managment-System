import React from 'react';
import Eror from "../../assets/404_page-not-found.png"
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>

            <div className='flex justify-center'>

                <img className='w-[60%]' src={Eror} alt="" />
            </div>

            <Link to="/">
                
            
            <button className='w-[160px] block my-5 mx-auto p-2 font-semibold bg-blue-600 text-white rounded-full'> Go To Home Page </button>
            
            </Link>
            
        </div>
    );
};

export default Error;