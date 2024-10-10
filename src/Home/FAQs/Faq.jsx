

const Faq = () => {
    return (

<div>
<div className="divider container mx-auto"></div>
<div className="md:flex justify-between items-center container mx-auto mb-20 mt-10 max-sm:w-4/5">

    <div>
        <img className="lg:w-[750px] md:w-[500px] " src="https://i.ibb.co.com/7RfJhRF/1459-Faq-Animations-Free-Downloadin-Lottie-JSONGIFMP4-ezgif-com-animated-gif-maker.gif" alt="" />
    </div>

    <div className="md:w-1/2">
        <div className="mb-8 flex justify-start items-center">
            <p className="lg:text-6xl md:text-3xl text-3xl font-bold text-[#050233]  pl-2">Important FAQ</p>
            <img className="md:w-20 w-12" src="assets/faq.gif" alt=""/>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-1">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title lg:text-3xl text-lg font-medium">What services does MediNest offer?
            </div>
            <div className="collapse-content">
            <div className="divider"></div>
            <p className="lg:text-xl">
            MediNest connects users with healthcare providers for other services. We help you find doctors, clinics, blood bank and ambulance services and offer medicine purchases anytime anywhere, everything is now on palm of your hand. You can book doctor appointments, schedule ambulance services, emergency blood requirements, and get information about medicine availability—all directly through our platform.
            </p>
            </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-1">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title lg:text-3xl text-lg  font-medium">What should I bring to my doctor’s appointment?
            </div>
            <div className="collapse-content">
            <div className="divider"></div>
            <p className="lg:text-xl">For your appointment, please bring any medical records, a list of current medications, and your identification documents. If you’re visiting for a specific condition, bringing test results or reports may also be helpful. This ensures your doctor has all the necessary information to provide the best care.</p>
            </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-1">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title lg:text-3xl text-lg font-medium">What benefits do the membership plans offer?
            </div>
            <div className="collapse-content">
            <div className="divider"></div>
            <p className="lg:text-xl">MediNest’s membership plans provide additional perks such as priority appointments,
            free delivery of medicines, discounts on medication purchases, and access to premium services like family health packages. Higher-tier plans may include free ambulance services or regular health checkups at participating clinics. You can choose the plan that best fits your healthcare needs</p>
            </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-1">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title lg:text-3xl text-lg font-medium">Do you accept health insurance?
            </div>
            <div className="collapse-content">
            <div className="divider"></div>
            <p className="lg:text-xl">Yes, many of the clinics and healthcare providers connected to MediNest accept health insurance. However, acceptance varies based on the clinic. Please check directly with the clinic or contact us to verify whether your insurance plan is accepted before booking your appointment.</p>
            </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-1">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title lg:text-3xl text-lg font-medium">What safety measures are the clinics and partners following?
            </div>
            <div className="collapse-content">
            <div className="divider"></div>
            <p className="lg:text-xl"> While COVID-19 is no longer a major concern, our partner clinics and healthcare providers maintain hygiene and safety standards. Regular sanitization, proper ventilation, and efficient crowd management are in place to ensure a safe healthcare environment.</p>
            </div>
        </div>

    </div>
</div>

</div>
    );
};

export default Faq;