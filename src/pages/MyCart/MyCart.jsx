import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import NavbarGeneral from "../../components/Navbar/NavbarGeneral";

const MyCart = () => {
  const products = useLoaderData();
  
  return (
    <div>
      <NavbarGeneral/>
      <div className="px-4 my-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {products.map((product) => (
          <MyCartCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MyCart;
