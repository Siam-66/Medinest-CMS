

const ourServices = () => {

    const plans = [
        {
          name: "Free",
          price: "$0",
          duration:"PER MONTH",
          benefits: [
            "1 Consultation per month",
            "Access to General Health Tips",
            "Basic Support via Email",
          ],
        },
        {
          name: "Basic",
          price: "$20",
          duration:"PER MONTH",
          benefits: [
            "2 Consultations per month",
            "Basic Diagnostic Tests",
            "10% off Medications",
            "Priority Appointment Booking",
            "24/7 Online Chat Support",
          ],
        },
        {
          name: "Premium",
          price: "$50",
          duration:"PER MONTH",
          benefits: [
            "Unlimited Consultations",
            "Advanced Diagnostic Tests",
            "20% off Medications",
            "24/7 Ambulance Service",
            "Annual Health Checkups",
            "Dedicated Specialist Support",
          ],
        },
        {
          name: "Family Plan",
          price: "$100",
          duration:"PER MONTH",
          benefits: [
            "Unlimited Consultations for Family",
            "Advanced Diagnostics for Family",
            "30% off Medications",
            "Dedicated Home Care Service",
            "Personal Health Manager",
            "Annual Family Health Checkups",
            "Home Doctor Visits",
          ],
        },
      ];


    return (
        <div>
 <div className="bg-gray-100 py-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">Membership Plans</h1>
        <p className="text-gray-600 mt-6 text-xl mb-20">
          Choose a plan that fits your healthcare needs.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 max-sm:p-10 gap-[50px] mt-16">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg text-center flex flex-col justify-between"
          >
            <div>
                <div className="bg-gradient-to-r from-teal-200 to-blue-700 p-5 md:p-20 mb-5">
                    <p className=" text-white font-semibold text-8xl ">{plan.price}</p>
                    <p className=" mt-10 text-white font-semibold text-3xl ">{plan.duration}</p>
                </div>
            
              <h2 className="text-4xl font-bold text-[#0D2E4E] ">{plan.name}</h2>
               
               <div className="divider"></div>

              <ul className="mt-6 p-10 space-y-2">
                {plan.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-gray-600 flex text-left text-lg"
                  >
                    <span className="bg-green-500 w-4 h-4 inline-block rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 py-5 w-full bg-[#0D2E4E] text-white  text-2xl font-semibold rounded-sm hover:bg-gradient-to-r from-teal-400 to-blue-700">
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default ourServices;