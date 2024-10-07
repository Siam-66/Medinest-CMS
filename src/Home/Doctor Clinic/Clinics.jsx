import { Link } from 'react-router-dom';
import { BsInfoSquare } from "react-icons/bs";
import { BsCalendar2Check } from "react-icons/bs";
import { TbMapSearch } from "react-icons/tb";

const Clinics = () => {
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

        <Link to="/" className='flex items-center gap-1 text-green-600 bg-white font-semibold lg:text-3xl md:text-2xl text-xl border-2 border-green-600 p-2 rounded-xl'><BsInfoSquare /><p>Find Out More</p></Link>

        <Link to="/" className='flex items-center gap-1 text-[#0D2E4E] bg-white font-semibold lg:text-3xl md:text-2xl text-xl border-2 border-[#0D2E4E] p-2 rounded-xl' ><BsCalendar2Check /> <p>Appointment</p> </Link>


        </div>

        <Link to="/" className='flex justify-center items-center lg:text-3xl md:text-2xl text-3xl text-[#1e6fc0] absolute right-4 top-2 gap-1'>
        <TbMapSearch />
            <p className='lg:text-2xl md:text-xl max-sm:hidden'>Find On Map</p>
        </Link>

    </div>
</div>

    );
};

export default Clinics;