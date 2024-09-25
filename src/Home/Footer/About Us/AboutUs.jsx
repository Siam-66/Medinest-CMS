

const AboutUs = () => {
    return (
        <div className=" container mx-auto py-[5rem] text-justify text-2xl max-sm:px-[2rem]">
            <div className="lg:flex gap-[5rem] mb-[3rem]">
                <div className=" mb-[2rem]">
                    <img className="w-[285rem]" src="https://i.ibb.co.com/j51rrPc/about1.png" alt="helping hand"/>
                </div>
                <div >
                    <h1 className="text-6xl font-bold mb-3">About MediNest</h1>
                    <p>MediNest is an online healthcare platform which is operated by MediNest Limited that is used by doctors, patients, clinics and hospitals. The company was founded in 2021 to address the issue of lack of healthcare IT infrastructure in Bangladesh for maintaining reliable database and providing end-to-end solutions for the entire ecosystem. MediNest offers its services which cater to both business-to-business market as well as business-to-consumer market.</p>
                    <br/>
                    <p>MediNest helps by offering a wide range of convenient healthcare services (Hospital Info, Doctors Appointment, Medi-Commerce, Domiciliary Care at home, Ambulance Service) for you and your family.</p>
                    <br/>
                    <p>Our head office is located in the heart of the metropolitan- Dhaka. Our goal is to provide a reliable and accessible solution to our clients. Additionally, MediNest is run by professionals who are directly involved in medical research and healthcare.</p>
                </div>
            </div>
                <div className="mb-[3rem]">
                    <p>Medi Nest is a health care system that provides all kinds of medical services so that you do not have to harbor the headache of looking for them. We provide online emergency services 24/7. You can avail services such as oxygen supplies, ambulances, medical appointments, and tests from the comfort of your own home.</p>
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
                        <li>Doctors Appointment.</li>
                        <li>Telemedicine.</li>
                        <li>Hospital Information.</li>
                        <li>Diagnostic Information.</li>
                        <li>Ambulance Service.</li>
                        <li>Medi-commerce(Medicine&Medical
                        <br/>Instruments home delivery).</li>
                        <li>Medical Instruments Rental..</li>
                        <li>Blood donor directory..</li>
                        <li>Sample collection for Diagnostics.</li>
                        </ul>
                        <br/>
                        <p>Trade License: TRAD/DSCC/063052/2024</p>
                        <p>Registered Address: 62/2, Sakib Kahadi Khan, North Mugda, Dhaka 1214.</p>
                </div>
                    </div>
                    <div className="mt-[2rem] max-sm:hidden">
                        <img className="w-[280rem]" src="https://i.ibb.co.com/XFLvRwZ/about2.png" alt="A Nurse"/>
                    </div>
                </div>

        </div>
    );
};

export default AboutUs;