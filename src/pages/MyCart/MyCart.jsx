import { useLoaderData } from "react-router-dom";
import MyCartCard from "./MyCartCard";
import NavbarGeneral from "../../components/Navbar/NavbarGeneral";
import { useState } from "react";

const MyCart = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts)
  
  return (
    <div>
      <NavbarGeneral/>
      <div className="px-4 my-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {products?.map((product) => (
          <MyCartCard key={product._id} product={product} setProducts={setProducts} products={products} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MyCart;
