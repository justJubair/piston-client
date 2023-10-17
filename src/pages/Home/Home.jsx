import { useLoaderData } from "react-router-dom"
import Banner from "../../components/Banner/Banner"
import Navbar from "../../components/Navbar/Navbar"
import BrandCard from "../../components/BrandCard/BrandCard"


const Home = () => {
  const brands = useLoaderData()
  console.log(brands)
  return (
    <div>
      <Navbar/>
      <Banner/>
      <div>
        {
          brands.map(brand=> <BrandCard key={brand._id} brand={brand}/>)
        }
      </div>
    </div>
  )
}

export default Home
