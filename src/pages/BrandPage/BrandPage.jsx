import { useLoaderData } from "react-router-dom"
import ProductCard from "./ProductCard";

const BrandPage = () => {
  const products = useLoaderData();

  return (
    <div>
      <h1>tesla</h1>
      <div>
        {
          products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </div>
  )
}

export default BrandPage
