import { useLoaderData } from "react-router-dom"
import ProductCard from "./ProductCard";
import NavbarGeneral from "../../components/Navbar/NavbarGeneral";

const BrandPage = () => {
  const products = useLoaderData();

  return (
    <div>
      <NavbarGeneral/>
      <div className="my-12 px-4">
        {
          products.map(product => <ProductCard products={products} key={product._id} product={product} />)
        }
      </div>
    </div>
  )
}

export default BrandPage
