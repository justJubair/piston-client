import { useEffect } from "react"
import { useState } from "react"
import FeaturedCard from "./FeaturedCard"
import useTheme from "../../hooks/useTheme"

const FeaturedListings = () => {
  const {theme} = useTheme()
    const [data, setData] = useState([])
   useEffect(()=>{
    const loadData = async()=>{
        const res = await fetch("https://piston-server-gh0fdb7cb-jubair-ahmeds-projects.vercel.app/products")
        const loadedData = await res.json()
        setData(loadedData)
    }
    loadData()
   },[])
 
  return (
    <div>
      <h2
      data-aos="fade-up"
      data-aos-duration="1000"
      className={`${theme && "text-white"} text-center mb-4 mt-24 text-4xl font-bold`}
    >
      Featured <span className="text-orange-800">Listings</span>
    </h2>
    <hr className="w-1/3 mx-auto border-b-2"/>
    <div className="max-w-screen-lg mt-12 mx-auto grid gap-4 grid-cols-1 lg:grid-cols-2">
        {
            data.slice(4,8).map(product=> <FeaturedCard key={product._id} product={product}/>)
        }
    </div>
    </div>
  )
}

export default FeaturedListings
