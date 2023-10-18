import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";
const BrandCard = ({ brand }) => {
  const navigate = useNavigate()
  const hanldeNavigate = (name)=>{
    if(name === "Tesla"){
      return navigate("/tesla")
    } else if(name === "McLaren"){
      return navigate("/mclaren")
    } else if(name == "Lamborghini"){
      return navigate("/lamborghini")
    } else if(name === "Ferrari") {
      return navigate("/ferrari")
    } else if(name === "BMW"){
      return navigate("/bmw")
    } else if(name === "Mercedes-Benz"){
      return navigate("/mercedes")
    }
  }
  return (
    <>
      <div onClick={()=>hanldeNavigate(brand.name)} className="card bg-base-100 shadow-xl image-full hover:cursor-pointer hover:scale-105 duration-500">
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
