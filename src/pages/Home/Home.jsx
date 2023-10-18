import { useLoaderData } from "react-router-dom"
import Banner from "../../components/Banner/Banner"
import Navbar from "../../components/Navbar/Navbar"
import BrandCard from "../../components/BrandCard/BrandCard"


const Home = () => {
  const brands = useLoaderData()

  return (
    <div>
      <Navbar/>
      <Banner/>
      <div className="max-w-screen-lg mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          brands.map(brand=> <BrandCard key={brand._id} brand={brand}/>)
        }
      </div>
    </div>
  )
}

export default Home
