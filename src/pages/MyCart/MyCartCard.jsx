import PropTypes from "prop-types";
import { AiOutlineDelete, AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
const MyCartCard = ({ product }) => {
  return (
    <div>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="md:h-96 w-full object-cover  rounded-t-lg" src={product.img} alt={product.name} />
        </a>
        <div className="p-5">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: ${product.price}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.description}
          </p>
         <div className="flex items-center gap-3 justify-end">
         <button>
            <AiOutlineDelete  className="text-orange-800 text-2xl duration-300 hover:text-3xl"/>
          </button>
         <Link>
            <AiOutlineHome className="text-orange-800 text-2xl duration-300 hover:text-3xl"/>
          </Link>
         </div>
           
         
        </div>
      </div>
    </div>
  );
};

MyCartCard.propTypes = {
  product: PropTypes.object,
};

export default MyCartCard;
