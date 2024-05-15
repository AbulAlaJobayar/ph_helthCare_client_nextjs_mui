import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Specialties from "@/components/UI/HomePage/Specialties/Specialties";
import TopRatedDoctor from "@/components/UI/HomePage/TopRatedDoctor/TopRatedDoctor";
import WhyUs from "../../components/UI/HomePage/WhyUs/WhyUs";


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialties/>
      <TopRatedDoctor/>
      <WhyUs/>
    </>
  );
};

export default HomePage;
