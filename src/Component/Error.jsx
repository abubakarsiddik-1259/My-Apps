import React from 'react';
import error from "../assets/App-Error.png";
const Error = () => {
    return (
           <div>
                   <img className='mx-auto' src={error} alt="" />
                   <div className="mx-auto">
                       <h1 className='text-4xl pb-3 font-bold text-gray-700'>OPPS!! APP NOT FOUND</h1>
                       <p className='text-gray-600'>TThe App you are requesting is not found on our system.  please try another apps</p>
                       <Link className='btn mx-auto bg-gradient-to-r from-[#632EE3] to-[#9F62F2] my-8 text-white' to='/'>Go Back!</Link>
                   </div>
               </div>
    );
};

export default Error;