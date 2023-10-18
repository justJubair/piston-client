import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {

  return (  
      <div className="card mb-8 lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="md:w-96 md:h-64"
            src={product.img}
            alt={product.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p className="text-gray-500">
            <span className="font-semibold">Brand: </span>
            {product.brand}
          </p>
          <p className="text-gray-500">
            <span className="font-semibold">Type: </span>
            {product.type}
          </p>
          <div className="rating my-2">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p className="text-gray-500"><span className="font-semibold">Price:</span> ${product.price}</p>
          <div className="card-actions justify-end">
            <Link to={`/detailsPage/${product._id}`} state={product.brand}><button className="btn bg-orange-800 text-white">Details</button></Link>
            <button className="btn bg-orange-800 text-white">Update</button>
          </div>
        </div>
      </div>
   
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
