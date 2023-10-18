import { useLoaderData } from "react-router-dom"
import TeslaCard from "./TeslaCard";

const TeslaPage = () => {
  const products = useLoaderData();
  console.log(products)
  return (
    <div>
      <h1>tesla</h1>
      <div>
        {
          products.map(product => <TeslaCard key={product.id} product={product} />)
        }
      </div>
    </div>
  )
}

export default TeslaPage
