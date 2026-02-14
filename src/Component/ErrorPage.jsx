import React from 'react';
import error from "../assets/error-404.png";
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div>
            <img className='mx-auto' src={error} alt="" />
            <div className="mx-auto">
                <h1 className='text-4xl pb-3 font-bold text-gray-700'>Oops, page not found!</h1>
                <p className='text-gray-600'>The page you are looking for is not available.</p>
                <Link className='btn mx-auto bg-gradient-to-r from-[#632EE3] to-[#9F62F2] my-8 text-white' to='/'>Go Back!</Link>
            </div>
        </div>
    );
};

export default ErrorPage;