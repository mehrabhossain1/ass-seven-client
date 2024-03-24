import BottomFooter from "../components/shared/BottomFooter";
import DonationPolicySection from "../components/ui/Home/DonationPolicySection";
import DonationPostsSection from "../components/ui/Home/DonationPostsSection";
import GallerySection from "../components/ui/Home/GallerySection";
import Hero from "../components/ui/Home/HeroSection";
import MotivationSection from "../components/ui/Home/MotivationSection";
import TopDonorTestimonials from "../components/ui/Home/TopDonorTestimonials";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <DonationPostsSection />
      <TopDonorTestimonials />
      <GallerySection />
      <AboutUs />
      <MotivationSection />
      <DonationPolicySection />
      <BottomFooter />
    </div>
  );
};

export default Home;
