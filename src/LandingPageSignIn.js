import FrameComponent1 from "../src/components/FrameComponent1";
import HomeScreen from "../src/components/HomeScreen";
import FrameComponent from "../src/components/FrameComponent";
import Testimonials1 from "../src/components/Testimonials1";
import Testimonials from "../src/components/Testimonials";
import End from "../src/components/End"
import Footer from "../src/components/Footer";
import styles from "./LandingPageSignIn.module.css";

const LandingPageSignIn = () => {
    return (
        <div className={styles.landingPageSignIn}>
            <FrameComponent1 />
            <main className={styles.homeScreenParent}>
                <HomeScreen />
                <FrameComponent />
                <Testimonials1 />
                <Testimonials />
            </main>
            <End />
            <Footer />
        </div>
    );
};

export default LandingPageSignIn;