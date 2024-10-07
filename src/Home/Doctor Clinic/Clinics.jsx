import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsInfoSquare } from "react-icons/bs";
import { BsCalendar2Check } from "react-icons/bs";
import { TbMapSearch } from "react-icons/tb";

const Clinics = () => {
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    return (
        <div className="card shadow-xl bg-base-200 mx-auto border-[#0D2E4E] border mt-5 md:w-4/6 lg:w-2/6 relative">
            <div className="card-body">
                <div className="flex justify-start items-start">
                    <div className="md:w-3/12 w-3/6">
                        <img className='rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9gnmmdcm00bvKLbcXPZQ6t5oZoOZTWOedg&s" alt="Clinic" />
                    </div>
                    <div className="px-4">
                        <h2 className="font-bold text-xl">City Health Clinic</h2>
                        <p className="text-[#1e6fc0]">Specializing in Family Medicine</p>
                        <p>Address: 123 Health St, Cityville</p>
                        <p>Contact: 012-345-6789</p>
                        <p>Email: contact@cityhealthclinic.com</p>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className="font-semibold text-lg">Available Services:</h3>
                    <ul className="list-disc pl-5">
                        <li>General Consultations</li>
                        <li>Pediatric Care</li>
                        <li>Emergency Services</li>
                        <li>Health Check-Ups</li>
                    </ul>
                    <p className="mt-2">Operating Hours: Mon-Fri, 9 AM - 5 PM</p>
                </div>

                <div className='flex justify-around items-center mt-5'>
                    
                    <Link to="/" className='flex items-center hover:bg-gradient-to-r from-green-500 to-green-700 hover:text-white gap-1 text-green-600 bg-white font-semibold lg:text-3xl md:text-2xl text-xl border-2 border-green-600 p-2 rounded-xl'
                    onClick={() => setShowModal(true)}
                    >
                        <BsInfoSquare /><p>Find Out More</p>
                    </Link>

                    <Link to="/" className='flex items-center hover:bg-gradient-to-r from-[#1e6fc0] to-[#0D2E4E] hover:text-white gap-1 text-[#0D2E4E] bg-white font-semibold lg:text-3xl md:text-2xl text-xl border-2 border-[#0D2E4E] p-2 rounded-xl'>
                        <BsCalendar2Check /><p>Appointment</p>
                    </Link>
                </div>

                
                <Link to="/"
                    className='flex justify-center items-center lg:text-3xl md:text-2xl text-3xl text-[#1e6fc0] absolute right-4 top-2 gap-1' 
                    
                >
                    <TbMapSearch />
                    <p className='lg:text-2xl md:text-xl max-sm:hidden'>Find On Map</p>
                </Link>
            </div>

            {/* Modal */}
            {showModal && (
                <dialog open className="modal modal-bottom sm:modal-middle">
<div className="modal-box bg-gradient-to-r from-white to-blue-50 shadow-xl rounded-lg p-8">
    <h3 className="font-bold text-2xl text-[#0D2E4E] flex items-center">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M9 16h6M21 12c0 4.418-3.582 8-8 8S5 16.418 5 12s3.582-8 8-8 8 3.582 8 8z"></path>
        </svg>
        More About City Health Clinic
    </h3>
    
    <p className="mt-4 text-md text-gray-700 leading-relaxed">
        City Health Clinic offers a comprehensive range of medical services, ensuring personalized care and support.
    </p>
    
    <ul className="list-disc list-inside mt-4 space-y-2">
        <li className="text-md text-gray-600 flex items-center">
            <svg className="w-5 h-5 text-[#1e6fc0] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19h.01"></path>
            </svg>
            General Health Checkups
        </li>
        <li className="text-md text-gray-600 flex items-center">
            <svg className="w-5 h-5 text-[#1e6fc0] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19h.01"></path>
            </svg>
            Specialized Care in Pediatrics and Geriatrics
        </li>
        <li className="text-md text-gray-600 flex items-center">
            <svg className="w-5 h-5 text-[#1e6fc0] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19h.01"></path>
            </svg>
            24/7 Emergency Services
        </li>
        <li className="text-md text-gray-600 flex items-center">
            <svg className="w-5 h-5 text-[#1e6fc0] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19h.01"></path>
            </svg>
            On-site Pharmacy and Diagnostic Services
        </li>
    </ul>

    <p className="mt-4 text-gray-700 leading-relaxed">
        Our clinic is committed to providing high-quality healthcare in a compassionate, patient-centered environment. Your health is our priority.
    </p>
    
    <div className="modal-action mt-6">
        <button 
            className="btn bg-gradient-to-r from-[#1e6fc0] to-[#0D2E4E] text-white px-6 py-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            onClick={() => setShowModal(false)}
        >
            Close
        </button>
    </div>
</div>

                </dialog>
            )}
        </div>
    );
};

export default Clinics;
