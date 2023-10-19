import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Brands from "../../components/Brands/Brands";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const brands = useLoaderData();

  //useEffect
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <Banner />

     <Brands brands={brands}/>
     <WhyChooseUs/>
     <Footer/>
    </div>
  );
};

export default Home;
