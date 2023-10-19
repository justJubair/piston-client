import PropTypes from "prop-types";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const ProductCard = ({ product }) => {
  return (
    <div className="card w-full mb-8 lg:card-side bg-base-100 shadow-xl">
      <figure className="lg:w-1/2">
        <img
          className="w-full object-cover  md:h-64"
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

        <Rating
          emptySymbol={<AiOutlineStar size={20}/>}
          fullSymbol={<AiFillStar size={20} className="text-orange-800"/>}
          initialRating={product.rating}
          readonly
        />
        <p className="text-gray-500">
          <span className="font-semibold">Price:</span> ${product.price}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/detailsPage/${product._id}`} state={product.brand}>
            <button className="btn bg-orange-800 text-white hover:text-black">Details</button>
          </Link>
          <Link
            to={`/updateProduct/${product._id}`}
            className="btn bg-orange-800 text-white hover:text-black"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
