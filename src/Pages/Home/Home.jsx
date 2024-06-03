import AboutSection from "../../Components/AboutSection/AboutSection";
import Banner from "../../Components/Banner/Banner";
import FeatureSection from "../../Components/FeatureSection/FeatureSection";
import ReviewSection from "../../Components/ReviewSection/ReviewSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureSection/>
            <AboutSection/>
            <ReviewSection/>
        </div>
    );
};

export default Home;