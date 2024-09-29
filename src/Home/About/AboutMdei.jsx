import { Link } from 'react-router-dom';

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
            MediNest is an online platform connecting patients with doctors, clinics, and healthcare services. From doctor appointments to ambulance services and medicine purchases, we make healthcare easily accessible, right at your fingertips.
            </p>
            <h2 className="text-2xl lg:mt-8 mt-3 font-semibold text-[#0D2E4E]">Our Mission</h2>
            <p className="mt-2 lg:text-xl  text-lg text-gray-600">
            Our mission is to offer a seamless healthcare experience by linking users with trusted medical professionals. Run by healthcare experts, MediNest is committed to enhancing healthcare access across Bangladesh.
            </p>
            <h2 className="text-2xl lg:mt-8 mt-3 font-semibold text-[#0D2E4E]">Our Vision</h2>
            <p className="mt-2 lg:text-xl text-lg text-gray-600">
            MediNest aspires to be the nation's leading healthcare platform, providing an all-in-one solution for finding doctors, clinics, and services. Our goal is to make healthcare more accessible and personalized for all.
            </p>
            <div className="flex justify-center items-center lg:mt-[50px] mt-4 max-sm:mb-5 " >
                <Link to="/" className='text-[#0D2E4E] font-semibold lg:text-3xl text-xl border-[#0D2E4E] border-2 py-3 px-10 rounded-2xl'>Learn More About Us</Link>
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
            Finding the right care shouldn't be difficult. With MediNest, you can quickly find the healthcare services you need at the touch of a button. We ensure that every medical case, from routine check-ups to complex conditions, is handled with expertise and care.
            </p>
            <h2 className="text-2xl mt-8 font-semibold text-[#0D2E4E]">Top-ranked in the Bangladesh</h2>
            <p className="mt-2 text-lg lg:text-xl text-gray-600">
            Recognized as a leading healthcare access platform, MediNest connects patients to top healthcare providers across Bangladesh. Our growing network ensures quality healthcare is available to everyone, wherever they are.
            </p>
            <div className="flex justify-center items-center lg:mt-[50px] mt-4 max-sm:mb-5 " >
            
                <Link to="/" className='text-[#0D2E4E] font-semibold lg:text-3xl text-xl border-[#0D2E4E] border-2 py-3 px-10 rounded-2xl'>See Our Specialized Services</Link>
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