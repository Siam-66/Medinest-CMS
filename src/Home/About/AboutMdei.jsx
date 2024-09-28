

const AboutMdei = () => {
    return (
<div>
    <div className="divider md:px-[250px] "></div>
<div className="container mx-auto lg:px-[100px] items-center justify-center flex-col text-justify mb-10">

    <div className=" md:flex justify-center items-center lg:gap-[10px] lg:mt-20 mb-10">
        <div className="lg:px-20 px-5 ">
            <h2 className="text-4xl  font-semibold text-[#0D2E4E]">About MediNest</h2>
            <h2 className="text-2xl  lg:mt-8 mt-3 font-semibold text-[#0D2E4E]">Who we are</h2>
            <p className="mt-2  lg:text-xl text-lg  text-gray-600">
        MediNest is an online healthcare platform connecting doctors, patients, clinics, and hospitals. Our services include doctor appointments, emergency care, and domiciliary care at home.
            </p>
            <h2 className="text-2xl lg:mt-8 mt-3 font-semibold text-[#0D2E4E]">Our Mission</h2>
            <p className="mt-2 lg:text-xl  text-lg text-gray-600">
        Our mission is to provide a reliable healthcare solution. MediNest is run by professionals involved in medical research, committed to improving healthcare accessibility in Bangladesh.
            </p>
            <h2 className="text-2xl lg:mt-8 mt-3 font-semibold text-[#0D2E4E]">Our Vision</h2>
            <p className="mt-2 lg:text-xl text-lg text-gray-600">
            MediNest aims to be the Countries no.1 trusted healthcare provider, offering medical solutions right at your fingertips.
            </p>
            <div className="flex justify-center items-center lg:mt-[50px] mt-4 max-sm:mb-5 " >
                <a href="" className='text-[#0D2E4E] font-semibold lg:text-3xl text-xl border-[#0D2E4E] border-2 py-3 px-10 rounded-2xl'>Learn More About Us</a>
            </div>
            
        </div>
        <div className="">
            <img src="https://i.ibb.co.com/689n5j2/about0.jpg" alt="Healthcare Image 1" className="w-[1400px]  rounded-lg shadow-lg" />
        </div>
    </div>


    <div className="lg:px-20 md:flex justify-center items-center lg:gap-[50px]">

        <div className=" max-sm:hidden">
            <img src="https://i.ibb.co.com/svMn5zH/about3.jpg" alt="Healthcare Image 2" className="w-[1700px] rounded-lg shadow-lg" />
        </div>
        <div className="lg:pl-[80px] px-5">
            <h2 className="text-4xl font-semibold text-[#0D2E4E]">Healing starts here</h2>
            <h2 className="text-2xl mt-8 font-semibold text-[#0D2E4E]">The right answers the first time</h2>
            <p className="mt-2 text-lg lg:text-xl text-gray-600">
            Effective treatment begins with the right diagnosis. At MediNest, our expert team is equipped to handle even the most challenging medical cases, ensuring you receive the best possible care.
            </p>
            <h2 className="text-2xl mt-8 font-semibold text-[#0D2E4E]">Top-ranked in the Bangladesh</h2>
            <p className="mt-2 text-lg lg:text-xl text-gray-600">
            Recognized as the leading healthcare provider, MediNest holds more No. 1 rankings than any other institution in the nation, as per Bangladesh News & World Report.
            </p>
            <div className="flex justify-center items-center lg:mt-[50px] mt-4 max-sm:mb-5 " >
                <a href="" className='text-[#0D2E4E] font-semibold lg:text-3xl text-xl border-[#0D2E4E] border-2 py-3 px-10 rounded-2xl'>See Our Specialized Services</a>
            </div>
        </div>
        <div className="md:hidden mt-5">
            <img src="https://i.ibb.co.com/svMn5zH/about3.jpg" alt="Healthcare Image 2" className="w-[1550px] rounded-lg shadow-lg" />
        </div>
    </div>



    

        </div>
</div>
    );
};

export default AboutMdei;