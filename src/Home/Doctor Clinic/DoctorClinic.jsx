import { Link } from 'react-router-dom';
import { PiPhoneCall } from "react-icons/pi";
import { BsCalendar2Check } from "react-icons/bs";
import { TbMapSearch } from "react-icons/tb";

const DoctorClinic = () => {
    return (
<div className="card shadow-xl  bg-base-200 mx-auto border-[#0D2E4E] border mt-5 md:w-4/6 lg:w-3/6 relative">
    <div className="card-body">

        <div className="flex justify-start items-start">
                <div className="md:w-3/12 w-3/6">
                    <img className='rounded-lg' src="https://labaid.com.bd/files/images/1700983333.jpg" alt="" />
                </div>
                <div className="px-4">
                    <h2 className="font-bold text-xl">Dr. Chanchal Kumar Ghosh</h2>
                    <p className="text-[#1e6fc0]">Liver & Medicine Specialist, Professor, Dept. of Gastroenterology</p>
                    <p>20 Years of Experience Overall</p>
                    <p>Labaid Specialized Hospital</p>
                </div>
        </div>

        <div className='flex justify-around items-center mt-5'>
        
        <Link to="/"className='flex items-center hover:bg-gradient-to-r from-green-500 to-green-700 hover:text-white gap-1 text-green-600 bg-white font-semibold lg:text-4xl md:text-3xl text-2xl border-green-600  border-2 p-2 rounded-xl' >< PiPhoneCall /> <p className='lg:text-3xl md:text-2xl text-xl'>01620643588</p> </Link>

        <Link to="/" className='flex items-center hover:bg-gradient-to-r from-[#1e6fc0] to-[#0D2E4E] hover:text-white gap-1 text-[#0D2E4E] bg-white font-semibold lg:text-3xl md:text-2xl text-xl border-2 border-[#0D2E4E] p-2 rounded-xl' ><BsCalendar2Check /> <p>Appointment</p> </Link>
        
        </div>

        <Link  to="/" className='flex justify-center items-center lg:text-3xl md:text-2xl text-3xl text-[#1e6fc0] absolute right-4 top-2 gap-1'>
        <TbMapSearch />
        <p className='lg:text-2xl md:text-xl max-sm:hidden'>Find On Map</p>
        </Link>

    </div>
</div>
    );
};

export default DoctorClinic;