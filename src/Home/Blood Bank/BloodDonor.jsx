import { Link } from 'react-router-dom';
import { PiPhoneCall } from "react-icons/pi";



const BloodDonor = () => {
    return (
<div>

<div className="card shadow-xl bg-base-200 mx-auto border-[#0D2E4E] border mt-5 md:w-3/6 lg:w-2/6 relative">
    <div className="card-body">
        
        <div className="flex justify-start items-start">
            
            <div className="md:w-3/12 w-2/6">
                <img className="rounded-lg" src="https://i.pinimg.com/564x/2a/8a/79/2a8a79c09f77127f615b8977b25403ea.jpg" alt="Donor Image" />
            </div>
            
            <div className="px-4">
                <h2 className="font-bold text-2xl text-[#0D2E4E]">Hero Alom</h2>
                <p className="text-[#1e6fc0] text-lg">North Mugda Para, Dhaka-1214</p>
                <div className=" text-lg">
                    <p><strong>Last Donation:</strong> 2 months ago</p>
                    <p><strong>Blood Group:</strong> AB+</p>
                    <p><strong>Age:</strong> 40</p>
                </div>
            </div>
        </div>

        
        <div className="mt-4 flex items-center gap-2 absolute right-3 top-0">
            <span className="bg-green-500  text-white text-lg font-semibold py-1 px-3 rounded-full">Available</span>
        </div>

        
        <div className=' flex justify-start items-start mt-5'>
        <Link to="/"className='flex justify-center items-center  gap-1 text-green-600 bg-white font-semibold lg:text-4xl md:text-3xl text-2xl border-green-600  border-2 p-2 rounded-xl' >< PiPhoneCall /> <p className='lg:text-3xl md:text-2xl text-xl'>01620643588</p> </Link>
        </div>

    </div>
</div>


<div className="card shadow-xl bg-base-200 mx-auto border-[#0D2E4E] border mt-5 md:w-3/6 lg:w-2/6 relative">
    <div className="card-body">
        
        <div className="flex justify-start items-start">
            
            <div className="md:w-3/12 w-2/6">
                <img className="rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7xIcVx3bWJNieannnDWq61xWbtDSMvjSo7hllM1wn8ec5BoByfs7Y-XjhcBP3J4otBY&usqp=CAU" alt="Donor Image" />
            </div>
            
            <div className="px-4">
                <h2 className="font-bold text-2xl text-[#0D2E4E]">Tahery Hujur</h2>
                <p className="text-[#1e6fc0] text-lg">North Mugda Para, Dhaka-1214</p>
                <div className=" text-lg">
                    <p><strong>Last Donation:</strong>  months ago</p>
                    <p><strong>Blood Group:</strong> A+</p>
                    <p><strong>Age:</strong> 45</p>
                </div>
            </div>
        </div>

        
        <div className="mt-4 flex items-center gap-2 absolute right-3 top-0">
            <span className="bg-red-500  text-white text-lg font-semibold py-1 px-3 rounded-full">Unavailable</span>
        </div>

        
        <div className=' flex justify-start items-start mt-5'>
        <Link to="/"className='flex justify-center items-center  gap-1 text-green-600 bg-white font-semibold lg:text-4xl md:text-3xl text-2xl border-green-600  border-2 p-2 rounded-xl' >< PiPhoneCall /> <p className='lg:text-3xl md:text-2xl text-xl'>01620643588</p> </Link>
        </div>

    </div>
</div>


</div>
    );
};

export default BloodDonor;