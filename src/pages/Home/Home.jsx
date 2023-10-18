import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import BrandCard from "../../components/BrandCard/BrandCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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

      <div className="px-4">
        {/* section title */}
        <h2
          data-aos="zoom-out-right"
          data-aos-duration="2000"
          className="text-center mb-10 mt-16 text-3xl font-bold"
        >
          Our <span className="text-orange-800">Associated</span> Brands
        </h2>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="max-w-screen-lg mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {brands.map((brand) => (
            <BrandCard key={brand._id} brand={brand} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
