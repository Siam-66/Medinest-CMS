import OurServices from "./Services/OurServices";
import AboutMdei from "./About/AboutMdei";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <AboutMdei></AboutMdei>
        <OurServices></OurServices>
        </div>
    );
};

export default Home;