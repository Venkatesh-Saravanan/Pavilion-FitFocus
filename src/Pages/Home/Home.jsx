import AboutSection from "../../Components/AboutSection/AboutSection";
import Banner from "../../Components/Banner/Banner";
import FeatureSection from "../../Components/FeatureSection/FeatureSection";
import FeaturedClasses from "../../Components/FeaturedClasses/FeaturedClasses";
import NewsletterSection from "../../Components/NewsletterSection/NewsletterSection";
import ReviewSection from "../../Components/ReviewSection/ReviewSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureSection/>
            <AboutSection/>
            <FeaturedClasses/>
            <ReviewSection/>
            <NewsletterSection/>
        </div>
    );
};

export default Home;