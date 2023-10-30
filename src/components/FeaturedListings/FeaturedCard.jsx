import PropTypes from "prop-types";
import {  motion } from "framer-motion";

const FeaturedCard = ({ product, setSelectedId }) => {

  const handleAnimatino = _id=>{
if(window.innerWidth>768){
  setSelectedId(_id)
}
  }
  return (
    <motion.div layoutId={product._id} onClick={()=>  handleAnimatino(product._id)}  data-aos="flip-left" className=" relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <motion.div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
        <motion.img
          src={product.img}
          className="w-full h-full object-cover"
          alt="profile-picture"
        />
      </motion.div>
      <motion.div className="p-6 text-center">
        <motion.h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {product.name.slice(0, 20)}
        </motion.h4>
        <motion.p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-orange-800 to-orange-400 bg-clip-text">
          Price: ${product.price}
        </motion.p>
      </motion.div>
     
    </motion.div>
  );
};
FeaturedCard.propTypes = {
    product:PropTypes.object,
    setSelectedId:PropTypes.func,
}

export default FeaturedCard;
