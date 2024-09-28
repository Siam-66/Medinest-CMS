import OurServices from "./Services/OurServices";
import AboutMdei from "./About/AboutMdei";
import Banner from "./Banner/Banner";
import Testimonial from "./Testimonial/Testimonial";
// import Medicines from "./Medicine/Medicines";
import MedicineMain from "./Medicine/MedicineMain";
import MedicineMainMore from "./Medicine/MedicineMainMore";


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
        </div>
    );
};

export default Home;