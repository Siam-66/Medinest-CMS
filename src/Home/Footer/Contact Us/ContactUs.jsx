

const ContactUs = () => {
    return (
        <div className="container mx-auto text-justify mb-[2rem]">
        <div className="mt-[5rem] text-center text-2xl ">
            <div className="mb-[6rem]">
                <h3 className="text-4xl">Contact Us</h3>
            </div>
            <div className="lg:flex justify-around items-center gap-[3rem] px-[2rem] ">
                <div className=" relative border border-[#0D2E4E] px-[8rem] py-[4rem]">
                    <div>
                        <h3 className="text-5xl text-[#0D2E4E] font-bold">Hotline</h3>
                        <br/>
                        <p>+8801998597743</p>
                        <p>+8801620643588</p>
                    </div>
                    <div className="absolute -top-[2.5rem] left-[11rem] bg-white px-[0.5rem]">
                        <img className="w-[4.5rem]" src="https://i.ibb.co.com/RSMqrf7/Call.png" alt="call"/>
                    </div>
                </div>

                <div className=" relative border border-[#0D2E4E] px-[6rem] py-[4rem] max-sm:mt-[5rem]">
                    <div>
                        <h3 className="text-5xl text-[#0D2E4E] font-bold">Address</h3>
                        <br/>
                        <p>62 North Mugdapara <br/>Dhaka-1214
                            Bangladesh </p>
                    </div>
                    <div className="absolute -top-[2.5rem] left-[11rem] bg-white px-[0.5rem]">
                        <img className="w-[4.5rem]" src="https://i.ibb.co.com/WP3CkJB/Location.png" alt="call"/>
                    </div>
                </div>

                <div className=" relative border border-[#0D2E4E] px-[4rem] py-[4rem] max-sm:mt-[5rem]">
                    <div>
                        <h3 className="text-5xl text-[#0D2E4E] font-bold">Email</h3>
                        <br/>
                        <p>sakibkahadi0@gmail.com</p>
                        <p>siammahmud66@gmail.com</p>
                    </div>
                    <div className="absolute -top-[2.5rem] left-[11rem] bg-white px-[0.5rem]">
                        <img className="w-[4.5rem]" src="https://i.ibb.co.com/Zhn4c7Y/Message.png" alt="call"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-[6rem] lg:flex gap-[5rem]">

            <div>
                <div className="text-4xl text-[#0D2E4E] font-semibold max-sm:px-[1rem]">
                    <p>Have questions about our products, support services, or anything else? Let us know and we’ll get back to you.</p>
                </div>

                <div className="flex items-center justify-start mt-[3rem] max-sm:px-[1rem] ">
                    <div >
                        <form className=" lg:w-[50rem]  ">

                            <div className="mb-[1rem]">
                                <label className="block text-[#0D2E4E] text-3xl font-bold mb-2" htmlFor="name">
                                Name
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered h-[4rem] lg:w-[45rem] w-[31rem] pl-3 rounded-lg border border-gray-400 hover:border-gray-500 shadow-md" />
                            </div>
                            <div className="mb-[1rem]">
                                <label className="block text-[#0D2E4E] text-3xl font-bold mb-2" htmlFor="name">
                                Phone Number
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered h-[4rem] lg:w-[45rem] w-[31rem] pl-3 rounded-lg border border-gray-400 hover:border-gray-500 shadow-md" />
                            </div>

                            
                            <div className="mb-[1rem]">
                                <label className="block text-[#0D2E4E] text-3xl font-bold mb-2" htmlFor="subject">
                                    Subject
                                </label>
                                <input type="text" placeholder="Type here" className="input input-bordered h-[4rem] lg:w-[45rem] w-[31rem] pl-3 rounded-lg border border-gray-400 hover:border-gray-500 shadow-md" />
                            </div>

                            <div className="mb-[1rem]">
                                <label className="block text-[#0D2E4E] text-3xl font-bold mb-2" htmlFor="message">
                                Message
                                </label>
                                <textarea className="textarea textarea-bordered h-[10rem] lg:w-[45rem] w-[31rem] pl-3 rounded-lg border border-gray-400 hover:border-gray-500 " placeholder="Your message shadow-md"></textarea>
                            </div>
                        </form>

                        <div className="flex items-center justify-between mb-[2rem] lg:pl-[15rem] pl-[8rem] "> 
                            <button className="bg-[#0D2E4E] hover:bg-[#0a1c2e] lg:text-2xl text-white font-bold py-[1.5rem] px-[4rem] rounded-lg focus:outline-none focus:shadow-outline" type="submit">
                                Send Message
                            </button>
                        </div>
                    </div>
                

                </div>

                
            </div>

            <div className="max-sm:px-[1rem]">
            <img className="w-[90rem]" src="https://i.ibb.co.com/2drH9Qx/Contact.jpg" alt="contact"/>
            <br/>
            <p className="text-3xl text-[#0D2E4E] font-semibold">We are here 24/7 to help you with anything. We provide round-the-clock service. Please fill out the form with your name, phone number, subject, and message. Our team will contact you within an hour.</p>
            <br/>
            </div>
            
            </div>
        
    </div>
    );
};

export default ContactUs;