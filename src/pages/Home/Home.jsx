import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Brands from "../../components/Brands/Brands";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Footer from "../../components/Footer/Footer";
import FeaturedListings from "../../components/FeaturedListings/FeaturedListings";
import useTheme from "../../hooks/useTheme";

const Home = () => {
  const brands = useLoaderData();
  const {theme} = useTheme()
  //useEffect
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={theme ? "bg-black" : "bg-white"}>
      <Navbar />
      <Banner />

     <Brands brands={brands}/>
     <FeaturedListings/>
     <WhyChooseUs/>
     <Footer/>
    </div>
  );
};

export default Home;
