import MembershipPlan from "./MembershipPlan/MembershipPlan";
import AboutMdei from "./About/AboutMdei";
import Banner from "./Banner/Banner";
import Testimonial from "./Testimonial/Testimonial";

// import Medicines from "./Medicine/Medicines";

import Faq from "./FAQs/Faq";
import OurServices from "./OurServices/OurServices";
import DonateBlood from "./DonateBlood/DonateBlood";
import Clinics from "./Doctor Clinic/Clinics";

// import BloodDonor from "./Blood Bank/BloodDonor";
// import BloodBank from "./Blood Bank/BloodBank";
// import DoctorClinic from "./Doctor Clinic/DoctorClinic";
// import MedicineMain from "./Medicine/MedicineMain";
// import MedicineMainMore from "./Medicine/MedicineMainMore";

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        
        {/* <Medicines></Medicines>  not important */}

        {/* <MedicineMain></MedicineMain>
        <MedicineMainMore></MedicineMainMore>
        <DoctorClinic></DoctorClinic> 
        <BloodBank></BloodBank> 
        <BloodDonor></BloodDonor>
        */}
        <Clinics></Clinics>
        <AboutMdei></AboutMdei>
        <OurServices></OurServices>
        <DonateBlood></DonateBlood>
        <MembershipPlan></MembershipPlan>
        <Testimonial></Testimonial>
        
        <Faq></Faq>
        </div>
    );
};

export default Home;