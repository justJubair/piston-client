import PropTypes from "prop-types"
const BrandCard = ({ brand }) => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={brand?.img} alt={brand.name} />
        </figure>
        <div className="card-body justify-center items-center">
          <h2 className="card-title text-2xl">{brand?.name}</h2>
        </div>
      </div>
    </>
  );
};

BrandCard.propTypes= {
  brand:PropTypes.object
}

export default BrandCard;
