import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const DetailsPage = () => {
  const product = useLoaderData();
  const {brand, description, img, manufacture_year, name, price, rating, type} = product
  const addToCartProduct = {
    brand, description, img, manufacture_year, name, price, rating, type
  }
  const handleAddToCart = ()=>{
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(addToCartProduct) 
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){

        Swal.fire(
          'Success!',
          'Product added successfully!',
          'success'
        )
      }
    })
  }
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <div className="card w-full lg:w-1/2 mx-auto">
        <figure>
          <img src={product?.img} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.name}</h2>
          <p>{product?.description}</p>
          <p>Manufacture Year : {product?.manufacture_year}</p>
          <div className="card-actions justify-end">
            <button onClick={handleAddToCart} className="btn bg-orange-800 text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
