

const AboutUs = () => {
    return (
        <div className=" container mx-auto py-[5rem] text-justify text-2xl max-sm:px-[2rem]">
            <div className="lg:flex gap-[5rem] mb-[3rem]">
                <div className=" mb-[2rem]">
                    <img className="w-[285rem]" src="https://i.ibb.co.com/j51rrPc/about1.png" alt="helping hand"/>
                </div>
                <div >
                    <h1 className="text-6xl font-bold mb-2">About MediNest</h1>
                    <p className="mb-4">MediNest is an innovative healthcare platform managed by MediNest Limited, catering to the needs of healthcare professionals, patients, clinics, and hospitals. Founded in 2023, MediNest was established to address the lack of integrated healthcare solutions in Bangladesh and to provide reliable, accessible healthcare services to everyone.</p>
                    
                    <p  className="mb-4">We offer a wide range of healthcare services designed to simplify the healthcare journey for patients and their families. Whether it's finding doctors and clinics, booking ambulance services, accessing medications from trusted pharmacies, or connecting with a blood donor, MediNest aims to make healthcare more approachable for all.</p>
                    
                    <p>Headquartered in Dhaka, MediNest provides end-to-end solutions for both business-to-business and business-to-consumer markets. Our team consists of professionals actively involved in healthcare and medical research, ensuring that our platform is built on deep industry knowledge and expertise.</p>
                </div>
            </div>
                <div className="mb-[3rem]">
                    <p>MediNest is a health care system that provides all kinds of medical services so that you do not have to harbor the headache of looking for them. We provide online emergency services 24/7. You can avail services such as oxygen supplies, ambulances, medical appointments, and tests from the comfort of your own home.</p>
                    <br/>
                    <p>The global pandemic has changed the ways in which various services are provided. In a digitalized world, a communicable threat such as the covid-19 has mandated remote communication, and through this, it has and still is, influencing the way we acquire those services. The severity of the infectious disease has minimized the ability of people to normally communicate and socialize with people upfront. This has made it increasingly difficult to seek medical assistance not only for health-conscious people but also for those who require medical assistance. The notion of seeking these solutions from various sources has become a challenge and a matter of confusion for the masses.</p>
                </div>
                <div className=" lg:flex mb-[3rem] gap-[5rem]">
                    <div className="mt-[2rem] mb-[2rem] lg:hidden ">
                        <img className="w-[280rem]" src="https://i.ibb.co.com/XFLvRwZ/about2.png" alt="A Nurse"/>
                    </div>
                    <div>
                        <div>
                        <h3 className="text-5xl font-bold mb-1">Our Mission</h3>
                        <br/>
                        <p>Medi Nest is on a mission to make quality healthcare affordable and accessible for over millions Bangladeshi citizens. We believe in empowering our users with the most accurate, comprehensive, and curated information and care, enabling them to make better healthcare decisions.</p>
                        <br/>
                        <h3 className="text-5xl font-bold mb-1">Our Vision</h3>
                        <br/>
                        <p>One stop medical solution on fingertips. Being country’s no.1 trusted healthcare service provider.</p>
                        </div>
                    <div className="mt-[2rem]" >
                        <h3 className="text-5xl font-bold ">Services:</h3>
                        <br/>
                        <ul className="list-disc pl-[4rem]">
                        <li className="mb-4"><span className="font-semibold">Healthcare Providers:</span> Easily search for doctors, clinics, and hospitals in your area and book appointments.</li>
                        <li className="mb-4"><span className="font-semibold">Ambulance Services:</span> Urgent ambulance services available 24/7 for emergencies..</li>
                        <li className="mb-4"><span className="font-semibold">Pharmacy:</span> Medication delivery and access to trusted pharmacies for essential medical supplies.</li>
                        <li className="mb-4"><span className="font-semibold">Blood Bank:</span> Find nearby blood banks or connect with blood donors through our platform.</li>
                        </ul>
                        <br/>
                        <p>Trade License: TRAD/DSCC/063052/2024</p>
                        <p>Registered Address: 62/2, Sakib Kahadi Khan, North Mugda, Dhaka 1214.</p>
                </div>
                    </div>
                    <div className="mt-[2rem] max-sm:hidden md:hidden ">
                        <img className="w-[280rem]" src="https://i.ibb.co.com/XFLvRwZ/about2.png" alt="A Nurse"/>
                    </div>
                </div>

        </div>
    );
};

export default AboutUs;