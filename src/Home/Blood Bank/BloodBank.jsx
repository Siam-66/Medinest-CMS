import { Link } from 'react-router-dom';
import { PiPhoneCall } from "react-icons/pi";
import { BsCalendar2Check } from "react-icons/bs";
import { TbMapSearch } from "react-icons/tb";


const BloodBank = () => {
    return (


<div className="card shadow-xl  bg-base-200 mx-auto border-[#0D2E4E] border mt-5 w-6/6 md:w-4/6 lg:w-2/6 relative">
    <div className="card-body">

        <div className="flex justify-start items-start ">
                <div className="md:w-3/12 w-24">
                    <img className='rounded-lg' src="https://st4.depositphotos.com/1030956/29313/v/450/depositphotos_293132928-stock-illustration-vector-blood-donation-inscription-created.jpg" alt="" />
                </div>
                <div className="px-4">
                    <h2 className="font-bold text-2xl">Blood Bank</h2>
                    <p className="text-[#1e6fc0]">House- 01, Road-04, Dhanmondi</p>
                    <p className='font-semibold' >Available Right Now :</p>
                    <div className="grid grid-cols-4 gap-2 md:w-5/6 mt-2">
    
    <div className="flex items-center md:px-4 px-1  py-1 bg-green-100 border border-green-600 rounded-lg">
        <p className="text-lg font-bold text-green-600">A+</p>
        <span className="text-green-600">✔</span>
    </div>

    <div className="flex items-center md:px-4 px-1  py-1 bg-green-100 border border-green-600 rounded-lg">
        <p className="text-lg font-bold text-green-600">A-</p>
        <span className="text-green-600">✔</span>
    </div>

    <div className="flex items-center md:px-4 px-1  py-1 bg-green-100 border border-green-600 rounded-lg">
        <p className="text-lg font-bold text-green-600">B+</p>
        <span className="text-green-600">✔</span>
    </div>

    <div className="flex items-center md:px-4 px-1  py-1 bg-green-100 border border-green-600 rounded-lg">
        <p className="text-lg font-bold text-green-600">B-</p>
        <span className="text-green-600">✔</span>
    </div>

    <div className="flex items-center md:px-4 px-1  py-1 bg-green-100 border border-green-600 rounded-lg">
        <p className="text-lg font-bold text-green-600">AB+</p>
        <span className="text-green-600">✔</span>
    </div>

    <div className="flex items-center md:px-4 px-1  py-1 bg-red-100 border border-red-600 rounded-lg">
        <p className="text-lg font-bold text-red-600">AB-</p>
        <span className="text-red-600">✘</span>
    </div>


    <div className="flex items-center md:px-4 px-1  py-1 bg-green-100 border border-green-600 rounded-lg">
        <p className="text-lg font-bold text-green-600">O+</p>
        <span className="text-green-600">✔</span>
    </div>

    <div className="flex items-center md:px-4 px-1  py-1 bg-red-100 border border-red-600 rounded-lg">
        <p className="text-lg font-bold text-red-600">O-</p>
        <span className="text-red-600">✘</span>
    </div>
</div>

                    
                    
                </div>
        </div>

        <div className='flex justify-around items-center mt-5'>
        
        <Link to="/"className='flex items-center gap-1 text-green-600 bg-white font-semibold lg:text-4xl md:text-3xl text-2xl border-green-600  border-2 p-2 rounded-xl' >< PiPhoneCall /> <p className='lg:text-3xl md:text-2xl text-xl'>01620643588</p> </Link>

        <Link to="/" className='flex items-center gap-1 text-[#0D2E4E] bg-white font-semibold lg:text-3xl md:text-2xl text-xl border-2 border-[#0D2E4E] p-2 rounded-xl' ><BsCalendar2Check /> <p>Make A Request</p> </Link>
        
        </div>

        <Link  to="/" className='flex justify-center items-center lg:text-3xl md:text-2xl text-3xl text-[#1e6fc0] absolute right-4 top-2 gap-1'>
        <TbMapSearch />
        <p className='lg:text-2xl md:text-xl max-sm:hidden'>Find On Map</p>
        </Link>

    </div>
</div>

    );
};

export default BloodBank;