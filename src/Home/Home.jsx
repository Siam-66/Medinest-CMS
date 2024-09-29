import MembershipPlan from "./MembershipPlan/MembershipPlan";
import AboutMdei from "./About/AboutMdei";
import Banner from "./Banner/Banner";
import Testimonial from "./Testimonial/Testimonial";
// import Medicines from "./Medicine/Medicines";
import MedicineMain from "./Medicine/MedicineMain";
import MedicineMainMore from "./Medicine/MedicineMainMore";
import Faq from "./FAQs/Faq";
import OurServices from "./OurServices/OurServices";

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        {/* <Medicines></Medicines> */}
        <MedicineMain></MedicineMain>
        <MedicineMainMore></MedicineMainMore>
        <AboutMdei></AboutMdei>
        <Testimonial></Testimonial>
        <OurServices></OurServices>
        <MembershipPlan></MembershipPlan>
        <Faq></Faq>
        </div>
    );
};

export default Home;