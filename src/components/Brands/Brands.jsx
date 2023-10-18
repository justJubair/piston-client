import PropTypes from "prop-types"
import BrandCard from "../BrandCard/BrandCard"


const Brands = ({brands}) => {
  return (
    <div className="px-4 mb-7">
    {/* section title */}
    <h2
      data-aos="fade-up"
      data-aos-duration="2000"
      className="text-center mb-10 mt-16 text-3xl font-bold"
    >
      Our <span className="text-orange-800">Associated</span> Brands
    </h2>
    <div
      data-aos="flip-left"
      data-aos-duration="2000"
 
      className="max-w-screen-lg mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
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
