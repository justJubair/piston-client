import PropTypes from "prop-types"
import BrandCard from "../BrandCard/BrandCard"
import useTheme from "../../hooks/useTheme"


const Brands = ({brands}) => {
  const {theme} = useTheme()
  return (
    <div className="px-4 mb-7">
    {/* section title */}
    <h2
      data-aos="fade-up"
      data-aos-duration="2000"
      className={`${theme && "text-white"} text-center mb-4 mt-24 text-4xl font-bold`}
    >
      Our <span className="text-orange-800">Associated</span> Brands
    </h2>
    <hr className="w-1/3 mx-auto border-b-2"/>
    <div
      data-aos="flip-left"
      data-aos-duration="2000"
 
      className="max-w-screen-lg mt-12 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {brands.map((brand) => (
        <BrandCard key={brand._id} brand={brand} />
      ))}
    </div>
  </div>
  )
}

Brands.propTypes={
    brands:PropTypes.array
}

export default Brands
