import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import NavbarGeneral from "../../components/Navbar/NavbarGeneral";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const DetailsPage = () => {
  const product = useLoaderData();
  const {brand, description, img, manufacture_year, name, price, rating, type} = product
  const addToCartProduct = {
    brand, description, img, manufacture_year, name, price, rating, type
  }
  const handleAddToCart = ()=>{
    fetch("https://piston-server-gh0fdb7cb-jubair-ahmeds-projects.vercel.app/cart", {
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
   <>
   <NavbarGeneral/>
    <div className="max-w-screen-xl mx-auto px-4 my-8">
      <div className="card w-full lg:w-9/12 mx-auto">
        <figure>
          <img src={product?.img} className="object-cover" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.name}</h2>
          <p >{product?.description}</p>
          <p className="font-medium text-gray-500">Price: ${product?.price}</p>
          <Rating
          emptySymbol={<AiOutlineStar size={20}/>}
          fullSymbol={<AiFillStar size={20} className="text-orange-800"/>}
          initialRating={product.rating}
          readonly
        />
          <p className="font-medium text-gray-500">Manufacture Year : {product?.manufacture_year}</p>
          <div className="card-actions justify-end">
            <button onClick={handleAddToCart} className="btn bg-orange-800 text-white hover:text-black">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default DetailsPage;
