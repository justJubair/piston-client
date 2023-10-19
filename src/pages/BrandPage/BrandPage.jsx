import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
// import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import Navbar from "../../components/Navbar/Navbar";
const BrandPage = () => {
  const products = useLoaderData();

  return (
    <div>
      <Navbar />
      <AwesomeSlider className="h-screen">
        {products.map((product) => (
          <div className="w-full h-full bg-gradient-to-r from-black/10 to-black/5" key={product._id}>
            <img
              className="mix-blend-overlay w-full h-full object-cover"
              src={product.img}
            ></img>
          </div>
        ))}
      </AwesomeSlider>
      <div className="absolute top-36 left-8 md:left-20 lg:top-44 lg:left-24 z-10">
        {
          products.slice(0,1).map(product=> <div key={product._id}>
            <h1 className="text-4xl md:text-5xl mb-3 font-extrabold text-white">{product.brand}</h1>
            <p className="text-gray-300 md:w-1/2">{product.description}</p>
          </div>)
        }
      </div>
      <div className="mt-28 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Top <span className="text-orange-800">Selling</span> Cars</h1>
        {products.map((product) => (
          <ProductCard
            products={products}
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
