import AboutSection from "../../Components/AboutSection/AboutSection";
import Banner from "../../Components/Banner/Banner";
import FeatureSection from "../../Components/FeatureSection/FeatureSection";
import NewsletterSection from "../../Components/NewsletterSection/NewsletterSection";
import ReviewSection from "../../Components/ReviewSection/ReviewSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureSection/>
            <AboutSection/>
            <ReviewSection/>
            <NewsletterSection/>
        </div>
    );
};

export default Home;