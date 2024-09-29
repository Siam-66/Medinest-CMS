import React, { useState } from "react";

const MembershipPlan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCongratsModalOpen, setIsCongratsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPlans, setShowPlans] = useState(true); // Add state to hide membership plans
  const [showCongratsSection, setShowCongratsSection] = useState(false); // Add state to show congrats section

  const plans = [
    {
      name: "Free",
      price: "৳0",
      duration: "PER MONTH",
      benefits: [
        "Users can search for doctors and clinics",
        "One free consultation per month with a general practitioner",
        "Basic Support via Email",
      ],
    },
    {
      name: "Basic",
      price: "৳399",
      duration: "PER MONTH",
      benefits: [
        "Everything included in the Free Plan",
        "Users can book appointments with their preferred doctors without waiting",
        "One free consultation per month with any available specialist",
        "5% discount on all medicine purchases through the website",
        "Free delivery for medicine orders over a certain amount (e.g., ৳500)",
        "Exclusive access to health webinars and workshops",
      ],
    },
    {
      name: "Premium",
      price: "৳799",
      duration: "PER MONTH",
      benefits: [
        "Everything included in the Basic Plan",
        "Unlimited phone consultations (Once a week)",
        "10% discount on all medicine purchases",
        "One free ambulance service per month",
        "Priority access to blood bank requests and services",
        "Personalized health tracking and monitoring features",
        "Free delivery service for all medicine orders",
      ],
    },
    {
      name: "Family Plan",
      price: "৳1499",
      duration: "PER MONTH",
      benefits: [
        "Everything included in the Premium Plan, but shared across family members (6 members max)",
        "A shared platform for managing family members' health records",
        "Unlimited phone consultations for the family (4 times in a week)",
        "15% discount on all medicine purchases for all family members",
        "Family members can access emergency services, including priority ambulance booking",
        "Participate in health challenges and wellness programs as a family",
        "Free delivery service for all family members’ medicine orders",
      ],
    },
  ];

  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleConfirmPurchase = () => {
    setIsModalOpen(false);
    setIsCongratsModalOpen(true);
  };

  const handleCloseCongratsModal = () => {
    setIsCongratsModalOpen(false);
    setShowPlans(false); // Hide membership plans after close confirmation
    setShowCongratsSection(true); // Show a different section after close confirmation
  };

  return (
    <div className="mt-20">
      {showPlans ? ( // Show plans only if showPlans is true
        <div className="bg-gray-100 py-12">
          <div className="text-center">
            <h1 className="md:text-6xl text-4xl font-bold text-gray-800">Membership Plans</h1>
            <p className="text-gray-600 mt-6 text-xl mb-10">Choose a plan that fits your healthcare needs.</p>
            <div className="divider lg:px-32 px-12"></div>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-sm:px-14 gap-[50px] mt-16">
            {plans.map((plan, index) => (
              <div key={index} className="bg-white shadow-lg  rounded-b-3xl text-center flex flex-col justify-between">
                <div>
                  <div className="bg-gradient-to-r from-teal-200 to-blue-700 p-5 md:p-20 mb-5">
                    <p className="text-white font-semibold text-[85px] text-center">{plan.price}</p>
                    <p className="mt-10 text-white font-semibold text-3xl">{plan.duration}</p>
                  </div>

                  <h2 className="text-4xl font-bold text-[#0D2E4E]">{plan.name}</h2>
                  <div className="divider"></div>
                  <ul className="mt-5 py-5  px-5 space-y-2">
                    {plan.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-600 flex text-left gap-1 text-lg">
                        <span className="w-4 h-4 inline-block left-3 rounded-full mr-3">✔</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 py-5 w-full  bg-[#0D2E4E] text-white  text-2xl font-semibold rounded-b-3xl hover:bg-gradient-to-r from-teal-400 to-blue-700" onClick={() => handleChoosePlan(plan)}>
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>

          {isModalOpen && (
            <div>
              <input type="checkbox" id="my-modal" className="modal-toggle" checked />
              <div className="modal">
                <div className="modal-box">
                  <h2 className="text-4xl text-center font-bold mb-4">Confirm Your Purchase</h2>
                  <p className="text-center text-lg">Are you sure you want to choose the {selectedPlan ? selectedPlan.name : ""} plan?</p>
                  <div className="modal-action flex justify-center items-center">
                    <button className="border bg-pink-600 text-white rounded-lg py-3 px-6 text-2xl font-semibold" onClick={() => setIsModalOpen(false)}>
                      Cancel
                    </button>
                    <button className="border bg-blue-600 text-white rounded-lg py-3 px-6 text-2xl font-semibold" onClick={handleConfirmPurchase}>
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isCongratsModalOpen && (
            <div>
              <input type="checkbox" id="congrats-modal" className="modal-toggle" checked />
              <div className="modal">
                <div className="modal-box">
                  <h2 className="text-4xl text-center font-bold  mb-4">Congratulations!</h2>
                  <p className="text-center text-lg md:text-xl">You have successfully chosen the {selectedPlan ? selectedPlan.name : ""} plan!</p>
                  <div className="modal-action flex justify-center items-center">
                    <button className="border bg-green-600 text-white rounded-lg py-3 px-6 text-2xl font-semibold" onClick={handleCloseCongratsModal}>
                      Close Confirmation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : null}

      {showCongratsSection && ( // Show a different section after close confirmation
        // <div className="bg-gray-200 py-12 w-2/6 text-center container mx-auto ">
        //   <h2 className="md:text-4xl text-2xl font-bold text-gray-800">Thank you for subscribing!</h2>
        //   <p className="text-gray-600 mt-4 text-lg">We're excited to have you onboard. You can now enjoy your benefits.</p>
        // </div>

        <div className="bg-gradient-to-r from-blue-500 to-teal-400 py-16 px-8 md:px-16 w-11/12 md:w-2/5 text-center rounded-3xl shadow-lg mx-auto mt-12">
  <div className="flex justify-center items-center mb-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="white"
      className="w-12 h-12 bg-green-500 p-2 rounded-full"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>
  <h2 className="text-white md:text-5xl text-3xl font-bold">
    Thank you for subscribing!
  </h2>
  <p className="text-white mt-4 text-lg md:text-xl leading-relaxed">
    We're excited to have you onboard. You can now enjoy all your membership
    benefits.
  </p>
  {/* <button className="mt-8 bg-white text-blue-600 font-semibold text-lg px-8 py-3 rounded-full hover:bg-blue-100 transition-all">
    Explore Benefits
  </button> */}
</div>


      )}
    </div>
  );
};

export default MembershipPlan;
